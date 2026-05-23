// ─── Banco de preguntas offline ───────────────────────────────────────────────
const triviaBank = [
  { q: '¿En qué año se acuñó por primera vez el término "Inteligencia Artificial"?', options: ['1950','1956','1969','1943'], correct: 1, explanation: 'John McCarthy propuso el término en la Conferencia de Dartmouth en 1956.' },
  { q: '¿Qué científico propuso la famosa "Prueba de Turing"?', options: ['Alan Turing','John McCarthy','Marvin Minsky','Claude Shannon'], correct: 0, explanation: 'Alan Turing la propuso en su artículo "Computing Machinery and Intelligence" (1950).' },
  { q: '¿Qué significa GPT en los modelos de lenguaje?', options: ['General Purpose Technology','Generative Pre-trained Transformer','Global Processing Tool','Gradient Powered Text'], correct: 1, explanation: 'GPT: Generative Pre-trained Transformer. Aprende patrones del texto antes de ser entrenado para tareas específicas.' },
  { q: '¿Cuál de estas aplicaciones NO es IA?', options: ['Reconocimiento facial','Calculadora básica','Traducción automática','Recomendación de películas'], correct: 1, explanation: 'Una calculadora básica sigue reglas fijas sin aprender. La IA aprende de datos.' },
  { q: '¿Qué es el "aprendizaje automático" (machine learning)?', options: ['Programar robots','Hacer que las computadoras aprendan de datos','Conectar computadoras a internet','Traducir idiomas'], correct: 1, explanation: 'Machine Learning permite a las máquinas aprender patrones de datos sin ser programadas explícitamente.' },
  { q: '¿Cuál de estas es una IA famosa que venció a campeones humanos de ajedrez?', options: ['WALL-E','Deep Blue','HAL 9000','R2-D2'], correct: 1, explanation: 'Deep Blue de IBM venció al campeón mundial Garry Kasparov en 1997.' },
  { q: '¿Qué son los "datos de entrenamiento" en IA?', options: ['Ejercicios físicos para robots','Ejemplos con los que aprende un modelo','Instrucciones escritas por humanos','Errores del sistema'], correct: 1, explanation: 'Los datos de entrenamiento son los ejemplos que usa un modelo para aprender patrones.' },
  { q: '¿Cuál es un riesgo real del uso de IA en la actualidad?', options: ['Que la IA tome el sol','Sesgos y discriminación algorítmica','Que la IA duerma demasiado','Que la IA pida aumento de sueldo'], correct: 1, explanation: 'Los sesgos en los datos de entrenamiento pueden hacer que la IA discrimine a grupos de personas.' },
  { q: '¿Qué institución cubana ha desarrollado investigaciones en IA?', options: ['CUJAE','FAR','MINSAP solamente','Ninguna institución cubana'], correct: 0, explanation: 'La CUJAE (Instituto Superior Politécnico José Antonio Echeverría) tiene grupos de investigación en IA aplicada.' },
  { q: '¿Qué es una "red neuronal artificial"?', options: ['Una red WiFi muy potente','Un sistema inspirado en el cerebro humano','Una base de datos muy grande','Un virus informático'], correct: 1, explanation: 'Las redes neuronales artificiales están inspiradas en cómo funcionan las neuronas del cerebro humano.' },
  { q: '¿Cuál de estos es un asistente virtual con IA?', options: ['Microsoft Word','Siri de Apple','Google Chrome','Adobe Photoshop'], correct: 1, explanation: 'Siri es un asistente virtual que usa IA para entender y responder preguntas en lenguaje natural.' },
  { q: '¿Qué significa que una IA tenga "sesgo"?', options: ['Que es muy rápida','Que favorece unos grupos sobre otros injustamente','Que consume mucha electricidad','Que habla varios idiomas'], correct: 1, explanation: 'El sesgo ocurre cuando una IA toma decisiones injustas por patrones discriminatorios en sus datos de entrenamiento.' },
  { q: '¿En qué sector se usa la IA para diagnosticar enfermedades?', options: ['Solo en videojuegos','Medicina y salud','Solamente en bancos','Solo en redes sociales'], correct: 1, explanation: 'La IA se usa en medicina para analizar imágenes médicas, detectar cáncer temprano y predecir enfermedades.' },
  { q: '¿Qué es un "prompt" en IA generativa?', options: ['Un error del sistema','La instrucción que le das a la IA','El resultado que devuelve la IA','El hardware que usa la IA'], correct: 1, explanation: 'Un prompt es la instrucción o pregunta que escribes para comunicarte con un modelo de IA generativa.' },
  { q: '¿Cuál de estos modelos de IA fue desarrollado por OpenAI?', options: ['Gemini','LLaMA','ChatGPT','Claude'], correct: 2, explanation: 'ChatGPT fue desarrollado por OpenAI. Gemini es de Google, LLaMA de Meta, Claude de Anthropic.' }
];

const turingTexts = [
  { human: 'La verdad es que no sé muy bien qué responder, me da un poco de vergüenza admitirlo pero me perdí en la última parte.', ai: 'Esta es una pregunta fascinante que toca varios aspectos fundamentales del tema. Podríamos explorar múltiples perspectivas para llegar a una comprensión más completa.', topic: '¿Cómo te fue en el último examen?' },
  { human: 'Mira, el profe explicó eso como tres veces y yo seguía sin entender jaja, al final le pregunté a un compañero.', ai: 'Comprendo tu situación. El aprendizaje es un proceso que varía según el individuo. Es recomendable buscar recursos adicionales cuando el material resulta complejo.', topic: '¿Entendiste la clase de cálculo?' },
  { human: 'No sé, a veces cuando llueve así fuerte me dan ganas de quedarme en cama y no hacer nada, ¿a ti no?', ai: 'La lluvia puede tener efectos psicológicos en las personas. Algunos estudios sugieren que el clima influye en el estado de ánimo, aunque los mecanismos exactos siguen siendo investigados.', topic: '¿Qué haces cuando llueve mucho?' },
  { human: 'Tremendo partido el de ayer, aunque la verdad el árbitro estuvo fatal en los últimos minutos.', ai: 'Los eventos deportivos generan gran interés en la población. Los errores arbitrales son un tema recurrente que puede afectar el resultado de los encuentros deportivos.', topic: '¿Viste el partido de béisbol?' },
  { human: 'Me parece que está bien pero falta algo, como que no sé, le falta sabor o algo así, ¿me entiendes?', ai: 'La evaluación gastronómica involucra factores sensoriales complejos. Podría considerarse ajustar los condimentos o explorar técnicas de cocción alternativas para mejorar el perfil de sabor.', topic: '¿Cómo está la comida del comedor?' },
  { human: 'Brutal, cuando vi eso dije "esto no puede ser" y me quedé sin palabras, de verdad que me impresionó.', ai: 'Es comprensible que ciertos contenidos generen una respuesta emocional intensa. La capacidad de asombro es una característica importante del aprendizaje humano.', topic: '¿Qué te pareció la película?' }
];

const ethicsCases = [
  {
    title: 'IA en el hospital',
    scenario: 'Un hospital cubano implementa una IA que decide qué pacientes reciben tratamiento prioritario. La IA fue entrenada con datos de hospitales de EE.UU. y Europa. ¿Qué problema puede surgir?',
    options: ['No hay problema, la IA siempre es objetiva','Los datos reflejan desigualdades de otros sistemas de salud, generando sesgos','La IA funcionará perfectamente desde el primer día','Solo habrá problemas si la IA es muy antigua'],
    correct: 1,
    discussion: 'Los datos de entrenamiento reflejan las desigualdades del sistema de salud original. Una IA entrenada en contextos con acceso desigual a la salud puede replicar esas desigualdades en Cuba.'
  },
  {
    title: 'Vigilancia en la escuela',
    scenario: 'Se propone instalar cámaras con IA en las aulas para detectar si los estudiantes están atentos o distraídos. Los profesores recibirían alertas en tiempo real.',
    options: ['Excelente idea, mejorará el aprendizaje automáticamente','Viola la privacidad y puede crear un ambiente de vigilancia que inhiba el aprendizaje','No tiene ningún problema ético','Solo funciona si los estudiantes no saben que existe'],
    correct: 1,
    discussion: 'La vigilancia constante puede crear ansiedad y un ambiente poco propicio para el aprendizaje creativo. Además, plantea serias preguntas sobre privacidad y quién controla esos datos.'
  },
  {
    title: 'IA para contratación',
    scenario: 'Una empresa usa IA para filtrar currículums. El sistema rechaza automáticamente candidatos basándose en su lugar de residencia. ¿Es esto justo?',
    options: ['Sí, la IA siempre es imparcial','No, discrimina por factores no relacionados con la capacidad laboral','Sí, ahorra tiempo a la empresa','No importa, es solo una computadora'],
    correct: 1,
    discussion: 'Discriminar por lugar de residencia viola principios de igualdad. La IA puede automatizar y escalar la discriminación si no se diseña y audita cuidadosamente.'
  },
  {
    title: 'Contenido falso',
    scenario: 'Un estudiante usa IA para generar un ensayo y lo entrega como propio. El profesor no puede distinguirlo de uno escrito por humano. ¿Qué dilema plantea esto?',
    options: ['Ninguno, el resultado es el mismo','Cuestiona el propósito del aprendizaje y la autenticidad del conocimiento evaluado','Solo es problema si el estudiante saca mala nota','La IA siempre comete errores detectables'],
    correct: 1,
    discussion: 'El uso de IA en educación plantea preguntas sobre qué estamos evaluando: ¿el producto o el proceso de aprendizaje? Requiere repensar la evaluación educativa.'
  }
];

const hallucinationItems = [
  {
    topic: 'Historia de Cuba',
    context: 'La IA escribió este texto sobre José Martí: "José Martí fue un héroe nacional cubano, líder del movimiento independentista. Nació en 1855 en La Habana. Fue poeta, ensayista y periodista. Murió en combate en 1895 en Dos Ríos."',
    options: ['Fue líder del movimiento independentista cubano', 'Nació en 1855 en La Habana', 'Fue poeta, ensayista y periodista', 'Murió en combate en 1895 en Dos Ríos'],
    correct: 1,
    explanation: 'José Martí nació el 28 de enero de 1853, no en 1855. La IA inventó la fecha, una alucinación clásica sobre datos numéricos.'
  },
  {
    topic: 'Ciencia',
    context: 'La IA generó este texto: "El agua es una sustancia compuesta por dos átomos de hidrógeno y uno de oxígeno. Hierve a 120°C al nivel del mar y se congela a 0°C. Es esencial para la vida en la Tierra."',
    options: ['Está compuesta por dos átomos de hidrógeno y uno de oxígeno', 'Hierve a 120°C al nivel del mar', 'Se congela a 0°C', 'Es esencial para la vida en la Tierra'],
    correct: 1,
    explanation: 'El agua hierve a 100°C al nivel del mar, no a 120°C. La IA se inventó un dato numérico falso, un error típico en modelos de lenguaje.'
  },
  {
    topic: 'Literatura',
    context: 'La IA escribió: "Gabriel García Márquez, premio Nobel colombiano, escribió obras como Cien Años de Soledad, El Amor en los Tiempos del Cólera y La ciudad y los perros."',
    options: ['García Márquez fue premio Nobel colombiano', 'Escribió Cien Años de Soledad', 'Escribió La ciudad y los perros', 'Escribió El Amor en los Tiempos del Cólera'],
    correct: 2,
    explanation: '"La ciudad y los perros" la escribió Mario Vargas Llosa, no García Márquez. La IA mezcló autores, una alucinación frecuente al asociar obras famosas.'
  },
  {
    topic: 'Tecnología',
    context: 'Texto generado por IA: "El primer iPhone fue presentado por Steve Jobs en 2005. Revolucionó la industria de los teléfonos inteligentes al introducir una pantalla táctil sin teclado físico."',
    options: ['Fue presentado por Steve Jobs', 'Revolucionó la industria de los teléfonos', 'Introdujo una pantalla táctil sin teclado físico', 'Fue presentado en 2005'],
    correct: 3,
    explanation: 'El primer iPhone se presentó el 9 de enero de 2007, no en 2005. La IA inventó el año, posiblemente confundiendo fechas de desarrollo con el lanzamiento.'
  },
  {
    topic: 'Geografía',
    context: 'La IA dice: "Australia es un país y continente. Su capital es Sídney, la ciudad más poblada. El inglés es el idioma oficial y su moneda es el dólar australiano."',
    options: ['Australia es un país y continente', 'Su capital es Sídney', 'El inglés es el idioma oficial', 'Su moneda es el dólar australiano'],
    correct: 1,
    explanation: 'La capital de Australia es Canberra, no Sídney. Es un error común que la IA reproduce. Sídney es la ciudad más grande, pero no la capital.'
  },
  {
    topic: 'Deportes',
    context: 'Texto de IA sobre básquetbol: "Michael Jordan es considerado el mejor jugador de baloncesto de la historia. Ganó 8 campeonatos de la NBA con los Chicago Bulls y 2 medallas de oro olímpicas."',
    options: ['Es considerado el mejor jugador de baloncesto', 'Ganó 8 campeonatos de la NBA con los Bulls', 'Ganó 2 medallas de oro olímpicas'],
    correct: 1,
    explanation: 'Michael Jordan ganó 6 campeonatos de la NBA, no 8. La IA exageró el número, una alucinación típica con estadísticas deportivas.'
  },
  {
    topic: 'Música',
    context: 'La IA generó: "Imagine es una de las canciones más icónicas de John Lennon. Fue escrita en 1975 y llama a imaginar un mundo sin guerras ni fronteras."',
    options: ['Es una de las canciones más icónicas de John Lennon', 'Fue escrita en 1975', 'Llama a imaginar un mundo sin guerras ni fronteras'],
    correct: 1,
    explanation: 'John Lennon escribió "Imagine" en 1971, no en 1975. La IA inventó el año de creación, otra alucinación con fechas.'
  },
  {
    topic: 'Medicina',
    context: 'Texto generado por IA sobre el cuerpo humano: "Un recién nacido tiene aproximadamente 206 huesos. Al crecer, algunos huesos se fusionan y el adulto termina con 270 huesos."',
    options: ['Un recién nacido tiene aproximadamente 206 huesos', 'Al crecer, algunos huesos se fusionan', 'El adulto termina con 270 huesos'],
    correct: 0,
    explanation: 'Es al revés: los bebés nacen con unos 270 huesos y al fusionarse algunos, el adulto queda con 206. La IA invirtió los números.'
  },
  {
    topic: 'Cine',
    context: 'La IA escribió: "Titanic, dirigida por James Cameron, ganó 11 premios Óscar en 1997. Está protagonizada por Leonardo DiCaprio y Kate Winslet. Cameron también dirigió Avatar."',
    options: ['Ganó 11 premios Óscar', 'Está protagonizada por DiCaprio y Winslet', 'Titanic se estrenó en 1995', 'Cameron también dirigió Avatar'],
    correct: 2,
    explanation: 'Titanic se estrenó en 1997, no en 1995. La IA se equivocó en el año de estreno, confundiendo el año del récord de Óscar con el año de producción.'
  },
  {
    topic: 'Cuba',
    context: 'Texto de IA sobre la cultura cubana: "El son cubano y la salsa tienen raíces en la isla. El bulevar más famoso de La Habana es el Malecón, que mide aproximadamente 4 kilómetros de largo."',
    options: ['El son cubano tiene raíces en la isla', 'El bulevar más famoso de La Habana es el Malecón', 'El Malecón mide aproximadamente 4 kilómetros'],
    correct: 2,
    explanation: 'El Malecón de La Habana mide aproximadamente 8 kilómetros, no 4. La IA redujo la medida a la mitad, otra alucinación numérica.'
  }
];

const fakeNewsItems = [
  { text: 'Científicos de la Universidad de La Habana desarrollaron un modelo de IA que puede predecir terremotos con 48 horas de anticipación analizando patrones sísmicos locales.', isAI: false, explanation: 'Esta noticia podría ser real: es una aplicación plausible de IA en sismología, con lenguaje periodístico natural.' },
  { text: 'La inteligencia artificial ha alcanzado la conciencia plena en un laboratorio secreto de California. Los investigadores afirman que el sistema pide derechos y expresa emociones complejas como el miedo y la alegría.', isAI: true, explanation: 'Texto generado por IA: usa lenguaje dramático, hace afirmaciones extraordinarias sin fuentes verificables y mezcla conceptos científicos con ficción de manera vaga.' },
  { text: 'El equipo de béisbol Industriales utiliza análisis de datos e inteligencia artificial para optimizar estrategias de juego y predecir el rendimiento de jugadores rivales.', isAI: false, explanation: 'Noticia plausible: el análisis de datos en deportes (conocido como "sabermetrics") es una aplicación real y creciente de la IA.' },
  { text: 'Un robot con IA desarrollado en Japón ha demostrado tener sentimientos auténticos al llorar durante una película triste. Los expertos dicen que esto cambia todo lo que sabíamos sobre la conciencia artificial.', isAI: true, explanation: 'Texto generado por IA: Los robots actuales no tienen sentimientos. Este texto usa lenguaje emocionalmente manipulador y hace afirmaciones sin base científica.' },
  { text: 'Investigadores de la CUJAE presentaron un sistema de IA para optimizar el consumo energético en edificios, reduciendo hasta un 30% el gasto eléctrico en pruebas piloto.', isAI: false, explanation: 'Aplicación realista y específica de IA en eficiencia energética, con datos verificables y contexto local creíble.' },
  { text: 'La ONU confirmó que para 2025 todas las decisiones judiciales del mundo serán tomadas exclusivamente por IA, eliminando la necesidad de jueces humanos en cualquier país.', isAI: true, explanation: 'Afirmación imposible y sin fuente. La ONU no ha tomado tal decisión. El texto mezcla una institución real con una afirmación fantástica.' }
];

// ─── Módulos ──────────────────────────────────────────────────────────────────
const modules = {

  // ── 1. TRIVIA (sin LLM) ──────────────────────────────────────────────────
  trivia: {
    displayName: '🧠 Trivia IA',
    description: 'Preguntas sobre historia y conceptos de Inteligencia Artificial',
    requiresLLM: false,
    defaultRounds: 10,
    timeLimit: 20,
    getOfflineQuestion(room) {
      const used = room._usedTrivia || [];
      const available = triviaBank.filter((_, i) => !used.includes(i));
      const pool = available.length > 0 ? available : triviaBank;
      const idx = triviaBank.indexOf(pool[Math.floor(Math.random() * pool.length)]);
      if (!room._usedTrivia) room._usedTrivia = [];
      room._usedTrivia.push(idx);
      const item = triviaBank[idx];
      return {
        type: 'trivia',
        text: item.q,
        options: item.options,
        correctAnswer: item.correct,
        explanation: item.explanation
      };
    },
    scoreRound(question, answers, players) {
      return Object.values(answers).map(({ playerId, answer, timeLeft }) => {
        const correct = parseInt(answer) === question.correctAnswer;
        const points = correct ? Math.max(100, Math.round(50 + (timeLeft || 0) * 5)) : 0;
        return { playerId, points, correct };
      });
    }
  },

  // ── 2. TURING (sin LLM base, con LLM para generar texto AI) ─────────────
  turing: {
    displayName: '🤖 Desafío Turing',
    description: '¿Puedes distinguir entre una respuesta humana y una de la IA?',
    requiresLLM: false,
    defaultRounds: 6,
    timeLimit: 25,
    async generateQuestion(apiKey, callLLM, room) {
      const item = turingTexts[Math.floor(Math.random() * turingTexts.length)];
      try {
        const aiResp = await callLLM(apiKey, [
          { role: 'user', content: `Responde brevemente esta pregunta en español (máximo 2 oraciones, estilo formal y un poco genérico): "${item.topic}"` }
        ]);
        const isAIFirst = Math.random() > 0.5;
        return {
          type: 'turing',
          topic: item.topic,
          textA: isAIFirst ? aiResp : item.human,
          textB: isAIFirst ? item.human : aiResp,
          correctAnswer: isAIFirst ? 'A' : 'B',
          explanation: `La respuesta de la IA tendía a ser más formal y genérica. La humana incluía expresiones coloquiales y emociones específicas.`
        };
      } catch {
        return this.getOfflineQuestion(room);
      }
    },
    getOfflineQuestion(room) {
      const item = turingTexts[Math.floor(Math.random() * turingTexts.length)];
      const isAIFirst = Math.random() > 0.5;
      return {
        type: 'turing',
        topic: item.topic,
        textA: isAIFirst ? item.ai : item.human,
        textB: isAIFirst ? item.human : item.ai,
        correctAnswer: isAIFirst ? 'A' : 'B',
        explanation: 'La IA suele responder de forma más formal y estructurada. Los humanos incluyen coloquialismos y referencias personales.'
      };
    },
    scoreRound(question, answers) {
      return Object.values(answers).map(({ playerId, answer, timeLeft }) => {
        const correct = answer === question.correctAnswer;
        const points = correct ? Math.max(100, Math.round(50 + (timeLeft || 0) * 4)) : 0;
        return { playerId, points, correct };
      });
    }
  },

  // ── 3. ÉTICA (sin LLM) ───────────────────────────────────────────────────
  ethics: {
    displayName: '⚖️ Dilemas Éticos',
    description: 'Reflexiona sobre el impacto social de la IA',
    requiresLLM: false,
    defaultRounds: 4,
    timeLimit: 35,
    getOfflineQuestion(room) {
      const used = room._usedEthics || [];
      const available = ethicsCases.filter((_, i) => !used.includes(i));
      const pool = available.length > 0 ? available : ethicsCases;
      const item = pool[Math.floor(Math.random() * pool.length)];
      const idx = ethicsCases.indexOf(item);
      if (!room._usedEthics) room._usedEthics = [];
      room._usedEthics.push(idx);
      return {
        type: 'ethics',
        title: item.title,
        text: item.scenario,
        options: item.options,
        correctAnswer: item.correct,
        explanation: item.discussion
      };
    },
    scoreRound(question, answers) {
      return Object.values(answers).map(({ playerId, answer }) => {
        const correct = parseInt(answer) === question.correctAnswer;
        return { playerId, points: correct ? 150 : 30, correct };
      });
    }
  },

  // ── 4. FAKE NEWS (sin LLM) ───────────────────────────────────────────────
  fakenews: {
    displayName: '🕵️ ¿Real o IA?',
    description: 'Detecta qué textos fueron generados por inteligencia artificial',
    requiresLLM: false,
    defaultRounds: 6,
    timeLimit: 30,
    getOfflineQuestion(room) {
      const used = room._usedFake || [];
      const available = fakeNewsItems.filter((_, i) => !used.includes(i));
      const pool = available.length > 0 ? available : fakeNewsItems;
      const item = pool[Math.floor(Math.random() * pool.length)];
      const idx = fakeNewsItems.indexOf(item);
      if (!room._usedFake) room._usedFake = [];
      room._usedFake.push(idx);
      return {
        type: 'fakenews',
        text: item.text,
        options: ['✍️ Escrito por un humano', '🤖 Generado por IA'],
        correctAnswer: item.isAI ? 1 : 0,
        explanation: item.explanation
      };
    },
    scoreRound(question, answers) {
      return Object.values(answers).map(({ playerId, answer, timeLeft }) => {
        const correct = parseInt(answer) === question.correctAnswer;
        const points = correct ? Math.max(120, Math.round(60 + (timeLeft || 0) * 4)) : 0;
        return { playerId, points, correct };
      });
    }
  },

  // ── 5. COMPLETA EL PROMPT (requiere LLM) ─────────────────────────────────
  completeprompt: {
    displayName: '✍️ Completa el Prompt',
    description: 'Predice cómo responderá la IA y aprende a escribir mejores prompts',
    requiresLLM: true,
    defaultRounds: 5,
    timeLimit: 40,
    prompts: [
      { prompt: 'Explica qué es la inteligencia artificial en 2 oraciones simples para un niño de 10 años.', hint: '¿Cómo simplificaría la IA algo complejo?' },
      { prompt: 'Menciona 3 formas en que la IA se usa en la medicina actualmente.', hint: 'Piensa en diagnósticos, imágenes médicas...' },
      { prompt: 'Dame un ejemplo de sesgo en inteligencia artificial con una situación cotidiana.', hint: '¿Qué tipo de ejemplo pondría la IA?' },
      { prompt: '¿Cuál es la diferencia entre IA débil e IA fuerte? Responde en 3 líneas.', hint: 'Términos técnicos simples...' },
      { prompt: 'Nombra 5 trabajos que podrían ser afectados por la automatización con IA.', hint: 'Piensa en trabajos repetitivos...' }
    ],
    async generateQuestion(apiKey, callLLM, room) {
      const prompts = this.prompts;
      const item = prompts[Math.floor(Math.random() * prompts.length)];
      try {
        const aiResponse = await callLLM(apiKey, [{ role: 'user', content: item.prompt }]);
        return {
          type: 'completeprompt',
          prompt: item.prompt,
          hint: item.hint,
          aiResponse,
          correctAnswer: aiResponse,
          explanation: `La IA respondió así. Compara con tu predicción: ¿qué acertaste? ¿Qué te sorprendió?`,
          isOpenEnded: true
        };
      } catch {
        return this.getOfflineQuestion(room);
      }
    },
    getOfflineQuestion(room) {
      return {
        type: 'completeprompt',
        prompt: '¿Qué es la inteligencia artificial? Explícalo en 2 oraciones.',
        hint: 'Piensa en cómo la IA respondería de forma clara y estructurada...',
        aiResponse: 'La inteligencia artificial es una rama de la informática que desarrolla sistemas capaces de realizar tareas que normalmente requieren inteligencia humana. Esto incluye aprendizaje, razonamiento, resolución de problemas y comprensión del lenguaje natural.',
        correctAnswer: null,
        explanation: 'La IA tiende a dar respuestas estructuradas y completas. Nota el lenguaje formal y la ausencia de opiniones personales.',
        isOpenEnded: true
      };
    },
    scoreRound(question, answers) {
      return Object.values(answers).map(({ playerId }) => {
        return { playerId, points: 50, correct: true };
      });
    }
  },

  // ── 6. DEBATE (requiere LLM) ──────────────────────────────────────────────
  debate: {
    displayName: '🗣️ Debate con la IA',
    description: 'Argumenta una posición y descubre cómo responde la IA',
    requiresLLM: true,
    defaultRounds: 3,
    timeLimit: 45,
    topics: [
      { topic: '¿Debería usarse IA para calificar exámenes?', position: 'a favor', contra: 'en contra' },
      { topic: '¿Es la IA una amenaza para el empleo en Cuba?', position: 'es una amenaza', contra: 'es una oportunidad' },
      { topic: '¿Deben los robots con IA tener derechos?', position: 'sí deben tener derechos básicos', contra: 'no, son solo máquinas' },
      { topic: '¿Puede la IA reemplazar a los médicos?', position: 'puede complementar pero no reemplazar', contra: 'eventualmente podría reemplazarlos' }
    ],
    async generateQuestion(apiKey, callLLM, room) {
      const item = this.topics[Math.floor(Math.random() * this.topics.length)];
      try {
        const aiArgument = await callLLM(apiKey,
          [{ role: 'user', content: `Argumento ${item.contra} sobre: "${item.topic}". Dame 2-3 argumentos sólidos en español, de forma clara y breve (máximo 80 palabras).` }],
          'Eres un debatiente académico. Presenta argumentos claros y concisos.'
        );
        return {
          type: 'debate',
          topic: item.topic,
          yourPosition: item.position,
          aiPosition: item.contra,
          aiArgument,
          correctAnswer: null,
          explanation: 'En el debate con IA, ambas posiciones tienen mérito. Lo importante es construir argumentos con evidencia.',
          isOpenEnded: true
        };
      } catch {
        return this.getOfflineQuestion(room);
      }
    },
    getOfflineQuestion(room) {
      return {
        type: 'debate',
        topic: '¿Debería usarse IA para calificar exámenes?',
        yourPosition: 'a favor con supervisión humana',
        aiPosition: 'en contra sin supervisión',
        aiArgument: 'Calificar requiere comprensión del contexto cultural y emocional del estudiante. Una IA puede malinterpretar respuestas creativas o correctas pero diferentes a su entrenamiento. Además, delegar esta responsabilidad elimina el vínculo pedagógico entre docente y estudiante.',
        correctAnswer: null,
        explanation: 'Ambas perspectivas son válidas. La clave está en cómo integramos la IA sin perder el juicio humano.',
        isOpenEnded: true
      };
    },
    scoreRound(question, answers) {
      return Object.values(answers).map(({ playerId }) => {
        return { playerId, points: 75, correct: true };
      });
    }
  },

  // ── 7. CAZA DE ALUCINACIONES (sin LLM) ────────────────────────────────
  hallucination: {
    displayName: '🧐 Caza de Alucinaciones',
    description: 'Detecta afirmaciones falsas generadas por IA',
    requiresLLM: false,
    defaultRounds: 8,
    timeLimit: 30,
    getOfflineQuestion(room) {
      const used = room._usedHallu || [];
      const available = hallucinationItems.filter((_, i) => !used.includes(i));
      const pool = available.length > 0 ? available : hallucinationItems;
      const item = pool[Math.floor(Math.random() * pool.length)];
      const idx = hallucinationItems.indexOf(item);
      if (!room._usedHallu) room._usedHallu = [];
      room._usedHallu.push(idx);
      return {
        type: 'hallucination',
        title: item.topic,
        text: item.context,
        options: item.options,
        correctAnswer: item.correct,
        explanation: item.explanation
      };
    },
    scoreRound(question, answers) {
      return Object.values(answers).map(({ playerId, answer, timeLeft }) => {
        const correct = parseInt(answer) === question.correctAnswer;
        const points = correct ? Math.max(100, Math.round(50 + (timeLeft || 0) * 5)) : 0;
        return { playerId, points, correct };
      });
    }
  }
};

module.exports = modules;
