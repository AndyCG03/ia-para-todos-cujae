const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' },
  pingTimeout: 60000,
  pingInterval: 25000
});

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ─── Estado en memoria ────────────────────────────────────────────────────────
const rooms = new Map();

function createRoom(code, teacherId) {
  return {
    code,
    teacherId,
    apiKey: null,
    players: new Map(),
    phase: 'lobby',       // lobby | playing | results
    module: null,
    round: 0,
    maxRounds: 5,
    scores: {},
    currentQuestion: null,
    answers: {},
    timer: null,
    lastActivity: Date.now()
  };
}

function generateCode() {
  return Math.random().toString(36).substring(2, 7).toUpperCase();
}

function getRoomPublicState(room) {
  const players = [...room.players.values()].map(p => ({
    id: p.id, name: p.name, score: p.score, avatar: p.avatar, isTeacher: p.isTeacher
  }));
  return {
    code: room.code,
    phase: room.phase,
    module: room.module,
    round: room.round,
    maxRounds: room.maxRounds,
    players,
    currentQuestion: room.currentQuestion
  };
}

// ─── OpenRouter proxy ─────────────────────────────────────────────────────────
async function callLLM(apiKey, messages, systemPrompt = '') {
  const body = {
    model: 'openai/gpt-4o-mini',
    max_tokens: 400,
    messages: systemPrompt
      ? [{ role: 'system', content: systemPrompt }, ...messages]
      : messages
  };
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': 'https://ia-para-todos.cujae.edu.cu',
      'X-Title': 'IA Para Todos - CUJAE'
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) throw new Error(`OpenRouter error: ${res.status}`);
  const data = await res.json();
  return data.choices[0].message.content.trim();
}

// ─── Módulos ──────────────────────────────────────────────────────────────────
const modules = require('./src/modules');
const MAX_PLAYERS_PER_ROOM = 30;

function normalizeRoomCode(code) {
  return String(code || '').trim().toUpperCase();
}

function emitAppError(socket, msg, details = {}) {
  socket.emit('app:error', { msg, ...details });
}

function touchRoom(room) {
  room.lastActivity = Date.now();
}

// ─── Cleanup de salas abandonadas (cada 30s, elimina las que lleven 2 min sin actividad) ─
const ROOM_IDLE_MS = 300000;
const ROOM_CLEANUP_INTERVAL = 30000;

function cleanupRooms() {
  const now = Date.now();
  for (const [code, room] of rooms) {
    const teacherOnline = room.teacherId && io.sockets.sockets.has(room.teacherId);
    const students = [...room.players.values()].filter(p => !p.isTeacher);
    const idle = now - (room.lastActivity || now);

    // Muerta si: no hay nadie, o el profe se fue y pasaron 2 min, o quedó en results por 2 min
    const dead = (students.length === 0 && !teacherOnline) ||
                 (!teacherOnline && idle > ROOM_IDLE_MS) ||
                 (room.phase === 'results' && idle > ROOM_IDLE_MS);
    if (dead) {
      clearTimeout(room.timer);
      io.to(code).emit('room:closed', { reason: 'Sala cerrada por inactividad.' });
      rooms.delete(code);
    }
  }
}
setInterval(cleanupRooms, ROOM_CLEANUP_INTERVAL);

// ─── Socket.io ────────────────────────────────────────────────────────────────
io.on('connection', (socket) => {

  // Docente: crear sala
  socket.on('teacher:create', ({ name }) => {
    const teacherName = String(name || '').trim() || 'Docente';
    let code = generateCode();
    while (rooms.has(code)) code = generateCode();
    const room = createRoom(code, socket.id);
    room.players.set(socket.id, {
      id: socket.id, name: teacherName, score: 0,
      avatar: '👨‍🏫', isTeacher: true
    });
    rooms.set(code, room);
    socket.join(code);
    socket.data.roomCode = code;
    socket.data.role = 'teacher';
    socket.emit('teacher:created', { code });
    socket.emit('room:state', getRoomPublicState(room));
  });

  // Docente: configurar API key
  socket.on('teacher:setApiKey', ({ code, apiKey }) => {
    const room = rooms.get(normalizeRoomCode(code));
    if (!room || room.teacherId !== socket.id) {
      emitAppError(socket, 'No se pudo guardar la API key porque la sala no existe o no eres el docente.');
      return;
    }
    room.apiKey = apiKey;
    socket.emit('teacher:apiKeySet', { ok: true });
  });

  // Estudiante: unirse
  socket.on('player:join', ({ code, name, avatar }) => {
    const normalizedCode = normalizeRoomCode(code);
    const playerName = String(name || '').trim();
    if (!normalizedCode || normalizedCode.length < 4) {
      emitAppError(socket, 'Escribe un código de sala válido.');
      return;
    }
    if (!playerName) {
      emitAppError(socket, 'Escribe tu nombre antes de entrar a la sala.');
      return;
    }

    const room = rooms.get(normalizedCode);
    if (!room) {
      emitAppError(socket, 'Sala no encontrada. Verifica el código o pide al docente que cree una nueva sala.');
      return;
    }
    if (room.phase !== 'lobby') {
      emitAppError(socket, 'El juego ya comenzó. Espera a que el docente inicie una nueva partida.');
      return;
    }

    const students = [...room.players.values()].filter(p => !p.isTeacher);
    if (students.length >= MAX_PLAYERS_PER_ROOM) {
      emitAppError(socket, `La sala está llena. Máximo permitido: ${MAX_PLAYERS_PER_ROOM} estudiantes.`);
      return;
    }
    if (students.some(p => p.name.trim().toLowerCase() === playerName.toLowerCase())) {
      emitAppError(socket, 'Ya hay un estudiante con ese nombre en la sala. Usa un nombre distinto.');
      return;
    }
    room.players.set(socket.id, {
      id: socket.id, name: playerName, score: 0,
      avatar: avatar || '🎮', isTeacher: false
    });
    socket.join(normalizedCode);
    socket.data.roomCode = normalizedCode;
    socket.data.role = 'student';
    touchRoom(room);
    socket.emit('player:joined', { code: normalizedCode });
    io.to(normalizedCode).emit('room:state', getRoomPublicState(room));
  });

  // Docente: iniciar módulo
  socket.on('teacher:startModule', async ({ code, moduleName, rounds }) => {
    const room = rooms.get(normalizeRoomCode(code));
    if (!room || room.teacherId !== socket.id) {
      emitAppError(socket, 'No puedes iniciar el juego porque la sala no existe o no eres el docente.');
      return;
    }

    const mod = modules[moduleName];
    if (!mod) { emitAppError(socket, 'Módulo no encontrado. Selecciona un módulo válido.'); return; }

    const students = [...room.players.values()].filter(p => !p.isTeacher);
    if (students.length === 0) {
      emitAppError(socket, 'Aún no hay estudiantes en la sala. Comparte el código antes de iniciar.');
      return;
    }

    room.module = moduleName;
    room.maxRounds = Math.max(1, Math.min(parseInt(rounds, 10) || mod.defaultRounds || 5, 20));
    room.round = 0;
    room.phase = 'playing';
    room.scores = {};
    [...room.players.values()].forEach(p => { p.score = 0; });
    touchRoom(room);

    io.to(room.code).emit('room:state', getRoomPublicState(room));
    io.to(room.code).emit('game:moduleStart', { moduleName, displayName: mod.displayName, description: mod.description });
    if (mod.requiresLLM && !room.apiKey) {
      socket.emit('app:notice', { msg: 'Este módulo funciona mejor con API key. Se usará una pregunta offline de respaldo.' });
    }

    await startNextRound(room, io);
  });

  // Jugador: enviar respuesta
  socket.on('player:answer', ({ code, answer, timeLeft }) => {
    const room = rooms.get(normalizeRoomCode(code));
    if (!room) { emitAppError(socket, 'La sala ya no está disponible. Vuelve al inicio y entra con un código activo.'); return; }
    if (room.phase !== 'playing') { emitAppError(socket, 'La ronda no está activa todavía. Espera la indicación del docente.'); return; }
    if (room.answers[socket.id]) { emitAppError(socket, 'Tu respuesta ya fue registrada para esta ronda.'); return; }

    const player = room.players.get(socket.id);
    if (!player || player.isTeacher) { emitAppError(socket, 'No se pudo registrar la respuesta para este usuario.'); return; }

    room.answers[socket.id] = { answer, timeLeft, playerId: socket.id, playerName: player.name };

    const totalPlayers = [...room.players.values()].filter(p => !p.isTeacher).length;
    const answered = Object.keys(room.answers).length;

    io.to(code).emit('game:answerCount', { answered, total: totalPlayers });

    if (answered >= totalPlayers) {
      clearTimeout(room.timer);
      resolveRound(room, io);
    }
  });

  // Docente: avanzar manualmente
  socket.on('teacher:nextRound', ({ code }) => {
    const room = rooms.get(normalizeRoomCode(code));
    if (!room || room.teacherId !== socket.id) {
      emitAppError(socket, 'No se puede avanzar la ronda porque la sala no existe o no eres el docente.');
      return;
    }
    clearTimeout(room.timer);
    if (room.round >= room.maxRounds) {
      endGame(room, io);
    } else {
      startNextRound(room, io);
    }
  });

  // Docente: terminar juego
  socket.on('teacher:endGame', ({ code }) => {
    const room = rooms.get(normalizeRoomCode(code));
    if (!room || room.teacherId !== socket.id) {
      emitAppError(socket, 'No se puede terminar el juego porque la sala no existe o no eres el docente.');
      return;
    }
    clearTimeout(room.timer);
    endGame(room, io);
  });

  // Desconexión
  socket.on('disconnect', () => {
    const code = socket.data.roomCode;
    if (!code) return;
    const room = rooms.get(code);
    if (!room) return;
    room.players.delete(socket.id);
    if (room.teacherId === socket.id || socket.data.role === 'teacher') {
      clearTimeout(room.timer);
      io.to(code).emit('room:closed', { reason: 'El docente se desconectó. Sala cerrada.' });
      rooms.delete(code);
    } else {
      io.to(code).emit('room:state', getRoomPublicState(room));
    }
  });
});

// ─── Lógica de rondas ─────────────────────────────────────────────────────────
async function startNextRound(room, io) {
  room.round++;
  room.answers = {};
  room.currentQuestion = null;

  const mod = modules[room.module];
  io.to(room.code).emit('game:roundStart', { round: room.round, maxRounds: room.maxRounds });

  try {
    let question;
    if (mod.requiresLLM && room.apiKey) {
      question = await mod.generateQuestion(room.apiKey, callLLM, room);
    } else {
      question = mod.getOfflineQuestion(room);
    }
    room.currentQuestion = question;
    const timeLimit = mod.timeLimit || 20;
    io.to(room.code).emit('game:question', { question, timeLimit });

    room.timer = setTimeout(() => {
      resolveRound(room, io);
    }, timeLimit * 1000 + 2000);

  } catch (err) {
    console.error('Error generando pregunta:', err);
    const question = mod.getOfflineQuestion(room);
    room.currentQuestion = question;
    const timeLimit = mod.timeLimit || 20;
    io.to(room.code).emit('game:question', { question, timeLimit });
    room.timer = setTimeout(() => resolveRound(room, io), timeLimit * 1000 + 2000);
  }
}

function resolveRound(room, io) {
  const mod = modules[room.module];
  const results = mod.scoreRound(room.currentQuestion, room.answers, room.players);

  results.forEach(({ playerId, points, correct }) => {
    const player = room.players.get(playerId);
    if (player) player.score += points;
  });

  const scoreboard = [...room.players.values()]
    .filter(p => !p.isTeacher)
    .sort((a, b) => b.score - a.score)
    .map(p => ({ id: p.id, name: p.name, avatar: p.avatar, score: p.score }));

  io.to(room.code).emit('game:roundResult', {
    results,
    correctAnswer: room.currentQuestion?.correctAnswer,
    explanation: room.currentQuestion?.explanation,
    scoreboard
  });
}

function endGame(room, io) {
  room.phase = 'results';
  touchRoom(room);
  const scoreboard = [...room.players.values()]
    .filter(p => !p.isTeacher)
    .sort((a, b) => b.score - a.score)
    .map((p, i) => ({ rank: i + 1, id: p.id, name: p.name, avatar: p.avatar, score: p.score }));

  io.to(room.code).emit('game:end', { scoreboard });
}

// ─── Rutas HTTP ───────────────────────────────────────────────────────────────
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/docente', (req, res) => res.sendFile(path.join(__dirname, 'public', 'teacher.html')));
app.get('/jugar', (req, res) => res.sendFile(path.join(__dirname, 'public', 'student.html')));

app.get('/api/status', (req, res) => {
  res.json({ rooms: rooms.size, uptime: process.uptime() });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`\n🎮 IA Para Todos - CUJAE`);
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  console.log(`👨‍🏫 Docente: http://localhost:${PORT}/docente`);
  console.log(`🎓 Estudiantes: http://localhost:${PORT}/jugar\n`);
});
