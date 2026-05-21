# IA Para Todos — CUJAE

Plataforma educativa multijugador para enseñar Inteligencia Artificial.  
Desarrollado para el Instituto Superior Politécnico José Antonio Echeverría (CUJAE), La Habana, Cuba.

---

## 🚀 Despliegue en Hostinger

### Requisitos
- Plan de Hostinger con **Node.js** habilitado (plan Business o superior)
- Node.js 16+ en el servidor

### Pasos de instalación

1. **Subir los archivos** al servidor vía FTP o el panel de Hostinger  
   Sube todo el contenido de esta carpeta a `public_html/` o al directorio raíz del proyecto Node.

2. **Instalar dependencias**  
   Desde el terminal SSH de Hostinger:
   ```bash
   npm install
   ```

3. **Iniciar la aplicación**  
   En el panel de Hostinger > Node.js > configurar como:
   - **Entry point:** `server.js`
   - **Puerto:** el que asigne Hostinger (usa `process.env.PORT`)

   O desde SSH:
   ```bash
   npm start
   ```

4. **Dominio y proxy**  
   Hostinger configura automáticamente el proxy desde el dominio al puerto Node.js.

---

## 📁 Estructura del proyecto

```
ia-para-todos/
├── server.js              ← Servidor Express + Socket.io
├── package.json
├── src/
│   └── modules/
│       └── index.js       ← Los 6 módulos de juego
└── public/
    ├── index.html          ← Página de inicio
    ├── teacher.html        ← Panel del docente
    ├── student.html        ← Cliente del estudiante
    ├── css/
    │   └── style.css       ← Estilos con paleta CUJAE
    └── img/
        └── Logo_CUJAE.jpg
```

---

## 🎮 Módulos de juego

| Módulo | Requiere API | Rondas por defecto |
|--------|-------------|-------------------|
| 🧠 Trivia IA | No | 10 |
| 🤖 Desafío Turing | No (sí para mejorar) | 6 |
| ⚖️ Dilemas Éticos | No | 4 |
| 🕵️ ¿Real o IA? | No | 6 |
| ✍️ Completa el Prompt | Sí | 5 |
| 🗣️ Debate con la IA | Sí | 3 |

---

## 🔑 Configurar OpenRouter

1. Crea una cuenta en [openrouter.ai](https://openrouter.ai)
2. Genera una API key
3. El docente la ingresa en el panel antes de iniciar la sesión
4. La clave se usa solo en el servidor y nunca se expone al cliente

---

## 🌐 Uso en red local (LAN)

Si no hay internet disponible durante la clase:
- El servidor solo necesita conexión para los módulos con LLM
- Los 4 módulos offline funcionan completamente en LAN
- Los estudiantes se conectan a la IP local del servidor, ej: `http://192.168.1.10:3000`

---

## 👥 Capacidad

- Hasta 30 jugadores simultáneos por sala
- Múltiples salas paralelas soportadas
- Estado en memoria (se reinicia con el servidor)

---

## 🎨 Paleta de colores CUJAE

Los colores institucionales están definidos como variables CSS en `public/css/style.css`.

---

*Instituto Superior Politécnico José Antonio Echeverría — CUJAE*  
*La Habana, Cuba*
