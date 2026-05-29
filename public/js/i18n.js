const TRANSLATIONS = {
  es: {
    // Nav / Header
    'nav.home': 'Inicio',
    'nav.games': 'Juegos',
    'nav.how': 'Cómo funciona',
    'nav.rooms': 'Salas',
    'nav.sections': 'Secciones',
    'nav.back': '← Inicio',
    'header.subtitle': 'Universidad Tecnológica de La Habana',
    'header.badge': 'Juego educativo',

    // index.html — hero
    'hero.title': 'Aprende <span>Inteligencia Artificial</span> jugando',
    'hero.subtitle': 'Una experiencia multijugador para clases, talleres y eventos de la Universidad Tecnológica de La Habana.',
    'hero.create': 'Crear sala',
    'hero.join': 'Unirse al juego',

    // index.html — games section
    'games.kicker': 'Modos de juego',
    'games.title': 'Seis actividades para pensar, debatir y practicar IA',
    'games.lead': 'Los juegos están organizados en grupos de tres para que el docente pueda seleccionar rápido la dinámica adecuada.',
    'games.offline': 'Sin internet',
    'games.api': 'Requiere API',
    'games.trivia.name': 'Trivia IA',
    'games.trivia.desc': 'Preguntas de selección múltiple sobre historia, conceptos y aplicaciones de inteligencia artificial.',
    'games.turing.name': 'Desafío Turing',
    'games.turing.desc': 'Los estudiantes comparan dos textos y deciden cuál fue generado por IA.',
    'games.ethics.name': 'Dilemas Éticos',
    'games.ethics.desc': 'Casos reales para discutir sesgos, privacidad, automatización y responsabilidad.',
    'games.fakenews.name': '¿Real o IA?',
    'games.fakenews.desc': 'Ejercita pensamiento crítico detectando contenido humano y contenido generado.',
    'games.hallucination.name': 'Caza de Alucinaciones',
    'games.hallucination.desc': 'Identifica afirmaciones falsas que la IA inventa dentro de textos que parecen correctos.',
    'games.completeprompt.name': 'Completa el Prompt',
    'games.completeprompt.desc': 'El grupo predice respuestas del modelo y aprende a escribir instrucciones más precisas.',
    'games.debate.name': 'Debate con la IA',
    'games.debate.desc': 'Cada jugador argumenta una posición y compara su respuesta con el contraargumento de la IA.',

    // index.html — how it works
    'how.kicker': 'Cómo funciona',
    'how.title': 'Qué ocurre dentro de cada juego',
    'how.lead': 'Cada módulo usa rondas cortas, puntuación inmediata y un marcador compartido para mantener el ritmo de la clase.',
    'how.quick.title': 'Preguntas rápidas',
    'how.quick.desc': 'Trivia, Ética y Real o IA muestran opciones. El sistema evalúa la respuesta, suma puntos por acierto y premia la rapidez.',
    'how.texts.title': 'Comparación de textos',
    'how.texts.desc': 'Desafío Turing presenta dos textos. El estudiante identifica el texto generado por IA y luego ve la explicación.',
    'how.prompts.title': 'Prompts y predicción',
    'how.prompts.desc': 'Completa el Prompt pide anticipar cómo respondería un modelo. Requiere API para generar la respuesta real.',
    'how.debate.title': 'Argumentación guiada',
    'how.debate.desc': 'Debate con la IA convierte un tema en un ejercicio de razonamiento donde se contrasta la posición del estudiante con la del modelo.',

    // index.html — rooms
    'rooms.kicker': 'Salas en vivo',
    'rooms.title': 'El docente controla la sesión y los estudiantes entran con un código',
    'rooms.lead': 'No hace falta crear cuentas. La sala vive en memoria mientras el servidor está activo.',
    'rooms.step1.title': 'Crear sala',
    'rooms.step1.desc': 'El docente abre el panel, escribe su nombre y opcionalmente agrega una API key para los juegos con IA.',
    'rooms.step2.title': 'Compartir código',
    'rooms.step2.desc': 'La plataforma genera un código corto. Los estudiantes entran en /jugar y lo escriben junto a su nombre.',
    'rooms.step3.title': 'Elegir módulo',
    'rooms.step3.desc': 'El docente selecciona el juego, define la cantidad de rondas e inicia la actividad.',
    'rooms.step4.title': 'Ver resultados',
    'rooms.step4.desc': 'El marcador se actualiza por ronda y al final se muestran podio y resultados exportables.',

    // index.html — quick actions
    'quick.create': 'Crear sala',
    'quick.join': 'Unirse a sala',

    // teacher.html
    'teacher.title': 'Panel Docente',
    'teacher.create.heading': 'Crear sesión de juego',
    'teacher.create.sub': 'Se generará un código único para que los estudiantes se unan.',
    'teacher.name.label': 'Tu nombre',
    'teacher.name.placeholder': 'Prof. García',
    'teacher.apikey.label': 'API Key de OpenRouter',
    'teacher.apikey.optional': '(opcional)',
    'teacher.apikey.note': 'Solo necesaria para módulos con IA (Completa el Prompt y Debate). Los 4 módulos restantes funcionan sin ella. La clave nunca se envía a los estudiantes.',
    'teacher.create.btn': '🚀 Crear sala',
    'teacher.creating': 'Creando sala...',
    'teacher.room.code': 'Código de sala',
    'teacher.room.url': 'Los estudiantes van a <strong>ia-para-todos.cujae.edu.cu/jugar</strong> e ingresan este código',
    'teacher.players.title': 'Jugadores conectados',
    'teacher.players.waiting': 'Esperando jugadores...',
    'teacher.status.online': 'En línea',
    'teacher.scoreboard': 'Marcador',
    'teacher.module.select': 'Selecciona un módulo',
    'teacher.rounds.label': 'Número de rondas',
    'teacher.start.btn': '▶ Iniciar juego',
    'teacher.control.title': 'Control de sesión',
    'teacher.waiting.round': 'Esperando ronda...',
    'teacher.answers': '{answered} / {total} respuestas',
    'teacher.next': '⏭ Siguiente ronda',
    'teacher.end': '⏹ Terminar juego',
    'teacher.end.confirm': '¿Terminar el juego ahora?',
    'teacher.game.over': '🏆 Juego terminado',
    'teacher.export': '📥 Exportar resultados',
    'teacher.new.game': '🔄 Nueva partida',
    'teacher.module.offline': '✅ Sin internet',
    'teacher.module.llm': '🌐 Requiere API',
    'teacher.toast.connected': 'Conectado al servidor',
    'teacher.toast.apikey': 'API Key configurada ✓',
    'teacher.toast.module': 'Módulo iniciado: {name}',
    'teacher.err.noconn': 'No hay conexión con el servidor. Revisa la red e intenta de nuevo.',
    'teacher.err.noroom': 'Primero debes crear una sala.',
    'teacher.err.nomodule': 'Selecciona un módulo antes de iniciar.',
    'teacher.err.nostudents': 'Aún no hay estudiantes conectados. Comparte el código de sala antes de iniciar.',
    'teacher.err.generic': 'Ocurrió un error inesperado.',
    'teacher.err.noserver': 'No se pudo conectar con el servidor. Intenta recargar la página.',
    'teacher.err.disconnect': 'Desconectado del servidor. Las acciones se reanudarán al reconectar.',
    'teacher.round.label': 'Ronda {round}: {text}',

    // student.html
    'student.title': 'Jugar — IA Para Todos',
    'student.join.title': '🎮 Únete al juego',
    'student.join.sub': 'Ingresa el código que te dio tu profesor',
    'student.code.label': 'Código de sala',
    'student.name.label': 'Tu nombre',
    'student.name.placeholder': 'Ej: María García',
    'student.avatar.label': 'Elige tu avatar',
    'student.join.btn': 'Entrar 🚀',
    'student.joining': 'Entrando...',
    'student.lobby.waiting': 'Esperando a que el docente inicie el juego...',
    'student.lobby.players': '{n} jugador{s} conectado{s}',
    'student.waiting.answer': 'Tu respuesta fue enviada.\nEsperando a los demás...',
    'student.next.round': 'Próxima ronda en',
    'student.waiting.round': 'Esperando la siguiente ronda...',
    'student.round.label': 'Ronda {round} / {max}',
    'student.turing.which': '¿Cuál fue escrito por la IA?',
    'student.open.submit': 'Enviar respuesta ✓',
    'student.result.correct': '¡Correcto!',
    'student.result.wrong': 'Incorrecto',
    'student.result.sent': 'Respuesta enviada',
    'student.result.pts': '+{pts} pts',
    'student.streak.unstoppable': '🚀 ¡Racha imparable! x{n}\n+{bonus} bonus',
    'student.streak.fire': '🔥 Racha de {n}\n+{bonus} bonus',
    'student.streak.lightning': '⚡ Vas en racha x{n}',
    'student.scoreboard.you': '(tú)',
    'student.end.title': '🎉 ¡Juego terminado!',
    'student.end.champion': '🏆 ¡CAMPEÓN!',
    'student.end.second': '🥈 ¡Segundo lugar!',
    'student.end.third': '🥉 ¡Tercer lugar!',
    'student.end.rank': 'Puesto #{n}',
    'student.end.points': '{n} puntos',
    'student.play.again': 'Jugar de nuevo 🔄',
    'student.err.noconn': 'No hay conexión con el servidor. Revisa la red e intenta de nuevo.',
    'student.err.code': 'Ingresa el código de sala de al menos 4 caracteres.',
    'student.err.name': 'Escribe tu nombre antes de entrar.',
    'student.err.noserver': 'No se pudo conectar con el servidor. Intenta recargar la página.',
    'student.err.disconnect': 'Desconectado. Reconectando...',
    'student.err.reconnected': 'Reconectado a la partida ✓',
    'student.err.reconnecting': 'Reconectado ✓',
    'student.room.closed': 'Sala cerrada.',
    'student.badge.ready': '¡Listo para jugar!',
    'student.badge.preparing': 'Preparando...',
    'student.ai.label': '🤖 Respuesta de la IA',
    'student.scoreboard.title': 'Marcador actual',
    'student.open.hint.debate': 'Escribe tus argumentos de forma clara y breve',
    'student.open.hint.prompt': '¿Cómo crees que responderá la IA?',
    'student.open.placeholder': 'Escribe tu respuesta aquí...',
    'student.debate.position': 'Tu posición: "{yours}". La IA defenderá: "{ai}"',
    'student.q.badge.trivia': '🧠 Trivia',
    'student.q.badge.turing': '🤖 Turing',
    'student.q.badge.ethics': '⚖️ Ética',
    'student.q.badge.fakenews': '🕵️ ¿Real o IA?',
    'student.q.badge.completeprompt': '✍️ Prompt',
    'student.q.badge.debate': '🗣️ Debate',
    'student.q.badge.hallucination': '🧐 Alucinaciones',
    'student.q.loading': 'Cargando...',
    'student.q.loading.question': 'Cargando pregunta...',
    'student.module.banner': 'Módulo',

    // Module names (shared)
    'module.trivia': 'Trivia IA',
    'module.turing': 'Desafío Turing',
    'module.ethics': 'Dilemas Éticos',
    'module.fakenews': '¿Real o IA?',
    'module.hallucination': 'Caza de Alucinaciones',
    'module.completeprompt': 'Completa el Prompt',
    'module.debate': 'Debate con la IA',

    // footer
    'footer.text': '<strong>IA Para Todos</strong> · Universidad Tecnológica de La Habana · CUJAE · La Habana, Cuba',
  },

  en: {
    // Nav / Header
    'nav.home': 'Home',
    'nav.games': 'Games',
    'nav.how': 'How it works',
    'nav.rooms': 'Rooms',
    'nav.sections': 'Sections',
    'nav.back': '← Home',
    'header.subtitle': 'Havana University of Technology',
    'header.badge': 'Educational game',

    // index.html — hero
    'hero.title': 'Learn <span>Artificial Intelligence</span> by playing',
    'hero.subtitle': 'A multiplayer experience for classes, workshops and events at the Havana University of Technology.',
    'hero.create': 'Create room',
    'hero.join': 'Join game',

    // index.html — games section
    'games.kicker': 'Game modes',
    'games.title': 'Six activities to think, debate and practice AI',
    'games.lead': 'Games are organized in groups of three so teachers can quickly pick the right dynamic.',
    'games.offline': 'No internet',
    'games.api': 'Requires API',
    'games.trivia.name': 'AI Trivia',
    'games.trivia.desc': 'Multiple-choice questions about the history, concepts and applications of artificial intelligence.',
    'games.turing.name': 'Turing Challenge',
    'games.turing.desc': 'Students compare two texts and decide which one was generated by AI.',
    'games.ethics.name': 'Ethical Dilemmas',
    'games.ethics.desc': 'Real cases to discuss bias, privacy, automation and accountability.',
    'games.fakenews.name': 'Real or AI?',
    'games.fakenews.desc': 'Practice critical thinking by detecting human content vs. generated content.',
    'games.hallucination.name': 'Hallucination Hunt',
    'games.hallucination.desc': 'Identify false claims that AI invents inside texts that appear correct.',
    'games.completeprompt.name': 'Complete the Prompt',
    'games.completeprompt.desc': 'The group predicts model responses and learns to write more precise instructions.',
    'games.debate.name': 'Debate with AI',
    'games.debate.desc': 'Each player argues a position and compares their answer with the AI\'s counterargument.',

    // index.html — how it works
    'how.kicker': 'How it works',
    'how.title': 'What happens inside each game',
    'how.lead': 'Each module uses short rounds, instant scoring and a shared leaderboard to keep the class pace.',
    'how.quick.title': 'Quick questions',
    'how.quick.desc': 'Trivia, Ethics and Real or AI show options. The system evaluates the answer, adds points for correct answers and rewards speed.',
    'how.texts.title': 'Text comparison',
    'how.texts.desc': 'Turing Challenge presents two texts. The student identifies the AI-generated text and then sees the explanation.',
    'how.prompts.title': 'Prompts and prediction',
    'how.prompts.desc': 'Complete the Prompt asks you to anticipate how a model would respond. Requires API to generate the real answer.',
    'how.debate.title': 'Guided argumentation',
    'how.debate.desc': 'Debate with AI turns a topic into a reasoning exercise where the student\'s position is contrasted with the model\'s.',

    // index.html — rooms
    'rooms.kicker': 'Live rooms',
    'rooms.title': 'The teacher controls the session and students join with a code',
    'rooms.lead': 'No accounts needed. The room lives in memory while the server is active.',
    'rooms.step1.title': 'Create room',
    'rooms.step1.desc': 'The teacher opens the panel, enters their name and optionally adds an API key for AI games.',
    'rooms.step2.title': 'Share code',
    'rooms.step2.desc': 'The platform generates a short code. Students go to /jugar and enter it along with their name.',
    'rooms.step3.title': 'Choose module',
    'rooms.step3.desc': 'The teacher selects the game, sets the number of rounds and starts the activity.',
    'rooms.step4.title': 'See results',
    'rooms.step4.desc': 'The leaderboard updates each round and at the end shows the podium and exportable results.',

    // index.html — quick actions
    'quick.create': 'Create room',
    'quick.join': 'Join room',

    // teacher.html
    'teacher.title': 'Teacher Panel',
    'teacher.create.heading': 'Create game session',
    'teacher.create.sub': 'A unique code will be generated for students to join.',
    'teacher.name.label': 'Your name',
    'teacher.name.placeholder': 'Prof. García',
    'teacher.apikey.label': 'OpenRouter API Key',
    'teacher.apikey.optional': '(optional)',
    'teacher.apikey.note': 'Only needed for AI modules (Complete the Prompt and Debate). The other 4 modules work without it. The key is never sent to students.',
    'teacher.create.btn': '🚀 Create room',
    'teacher.creating': 'Creating room...',
    'teacher.room.code': 'Room code',
    'teacher.room.url': 'Students go to <strong>ia-para-todos.cujae.edu.cu/jugar</strong> and enter this code',
    'teacher.players.title': 'Connected players',
    'teacher.players.waiting': 'Waiting for players...',
    'teacher.status.online': 'Online',
    'teacher.scoreboard': 'Scoreboard',
    'teacher.module.select': 'Select a module',
    'teacher.rounds.label': 'Number of rounds',
    'teacher.start.btn': '▶ Start game',
    'teacher.control.title': 'Session control',
    'teacher.waiting.round': 'Waiting for round...',
    'teacher.answers': '{answered} / {total} answers',
    'teacher.next': '⏭ Next round',
    'teacher.end': '⏹ End game',
    'teacher.end.confirm': 'End the game now?',
    'teacher.game.over': '🏆 Game over',
    'teacher.export': '📥 Export results',
    'teacher.new.game': '🔄 New game',
    'teacher.module.offline': '✅ No internet',
    'teacher.module.llm': '🌐 Requires API',
    'teacher.toast.connected': 'Connected to server',
    'teacher.toast.apikey': 'API Key set ✓',
    'teacher.toast.module': 'Module started: {name}',
    'teacher.err.noconn': 'No connection to server. Check your network and try again.',
    'teacher.err.noroom': 'You must create a room first.',
    'teacher.err.nomodule': 'Select a module before starting.',
    'teacher.err.nostudents': 'No students connected yet. Share the room code before starting.',
    'teacher.err.generic': 'An unexpected error occurred.',
    'teacher.err.noserver': 'Could not connect to server. Try reloading the page.',
    'teacher.err.disconnect': 'Disconnected from server. Actions will resume on reconnect.',
    'teacher.round.label': 'Round {round}: {text}',

    // student.html
    'student.title': 'Play — AI For All',
    'student.join.title': '🎮 Join the game',
    'student.join.sub': 'Enter the code your teacher gave you',
    'student.code.label': 'Room code',
    'student.name.label': 'Your name',
    'student.name.placeholder': 'e.g. María García',
    'student.avatar.label': 'Choose your avatar',
    'student.join.btn': 'Join 🚀',
    'student.joining': 'Joining...',
    'student.lobby.waiting': 'Waiting for the teacher to start the game...',
    'student.lobby.players': '{n} player{s} connected',
    'student.waiting.answer': 'Your answer was sent.\nWaiting for others...',
    'student.next.round': 'Next round in',
    'student.waiting.round': 'Waiting for next round...',
    'student.round.label': 'Round {round} / {max}',
    'student.turing.which': 'Which one was written by AI?',
    'student.open.submit': 'Submit answer ✓',
    'student.result.correct': 'Correct!',
    'student.result.wrong': 'Wrong',
    'student.result.sent': 'Answer submitted',
    'student.result.pts': '+{pts} pts',
    'student.streak.unstoppable': '🚀 Unstoppable streak! x{n}\n+{bonus} bonus',
    'student.streak.fire': '🔥 Streak of {n}\n+{bonus} bonus',
    'student.streak.lightning': '⚡ On a streak x{n}',
    'student.scoreboard.you': '(you)',
    'student.end.title': '🎉 Game over!',
    'student.end.champion': '🏆 CHAMPION!',
    'student.end.second': '🥈 Second place!',
    'student.end.third': '🥉 Third place!',
    'student.end.rank': 'Rank #{n}',
    'student.end.points': '{n} points',
    'student.play.again': 'Play again 🔄',
    'student.err.noconn': 'No connection to server. Check your network and try again.',
    'student.err.code': 'Enter a room code of at least 4 characters.',
    'student.err.name': 'Enter your name before joining.',
    'student.err.noserver': 'Could not connect to server. Try reloading the page.',
    'student.err.disconnect': 'Disconnected. Reconnecting...',
    'student.err.reconnected': 'Reconnected to game ✓',
    'student.err.reconnecting': 'Reconnected ✓',
    'student.room.closed': 'Room closed.',
    'student.badge.ready': 'Ready to play!',
    'student.badge.preparing': 'Preparing...',
    'student.ai.label': '🤖 AI Response',
    'student.scoreboard.title': 'Current scoreboard',
    'student.open.hint.debate': 'Write your arguments clearly and briefly',
    'student.open.hint.prompt': 'How do you think the AI will respond?',
    'student.open.placeholder': 'Write your answer here...',
    'student.debate.position': 'Your position: "{yours}". AI will defend: "{ai}"',
    'student.q.badge.trivia': '🧠 Trivia',
    'student.q.badge.turing': '🤖 Turing',
    'student.q.badge.ethics': '⚖️ Ethics',
    'student.q.badge.fakenews': '🕵️ Real or AI?',
    'student.q.badge.completeprompt': '✍️ Prompt',
    'student.q.badge.debate': '🗣️ Debate',
    'student.q.badge.hallucination': '🧐 Hallucinations',
    'student.q.loading': 'Loading...',
    'student.q.loading.question': 'Loading question...',
    'student.module.banner': 'Module',

    // Module names (shared)
    'module.trivia': 'AI Trivia',
    'module.turing': 'Turing Challenge',
    'module.ethics': 'Ethical Dilemmas',
    'module.fakenews': 'Real or AI?',
    'module.hallucination': 'Hallucination Hunt',
    'module.completeprompt': 'Complete the Prompt',
    'module.debate': 'Debate with AI',

    // footer
    'footer.text': '<strong>AI For All</strong> · Havana University of Technology · CUJAE · Havana, Cuba',
  }
};

const I18N = (() => {
  const STORAGE_KEY = 'ia_lang';
  let lang = localStorage.getItem(STORAGE_KEY) || 'es';

  function t(key, vars = {}) {
    const str = (TRANSLATIONS[lang] || TRANSLATIONS.es)[key] || (TRANSLATIONS.es)[key] || key;
    return str.replace(/\{(\w+)\}/g, (_, k) => vars[k] !== undefined ? vars[k] : `{${k}}`);
  }

  function setLang(l) {
    lang = l;
    localStorage.setItem(STORAGE_KEY, l);
    applyToDOM();
    document.documentElement.lang = l;
  }

  function getLang() { return lang; }

  // Apply data-i18n attributes
  function applyToDOM() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const html = el.dataset.i18nHtml;
      if (html) el.innerHTML = t(key);
      else el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('[data-i18n-value]').forEach(el => {
      el.value = t(el.dataset.i18nValue);
    });
    // Update lang switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  // Inject lang switcher into a container element
  function injectSwitcher(container) {
    const wrap = document.createElement('div');
    wrap.className = 'lang-switcher';
    wrap.innerHTML = `
      <button class="lang-btn${lang==='es'?' active':''}" data-lang="es" aria-label="Español">ES</button>
      <button class="lang-btn${lang==='en'?' active':''}" data-lang="en" aria-label="English">EN</button>`;
    wrap.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
    container.appendChild(wrap);
  }

  return { t, setLang, getLang, applyToDOM, injectSwitcher };
})();
