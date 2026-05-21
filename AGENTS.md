# Repository Guidelines

## Project Structure & Module Organization

This repository contains a Node.js multiplayer educational game about AI. The main server entry point is `server.js`, which defines the Express app, Socket.io events, in-memory room state, and the OpenRouter proxy used by LLM-enabled game modes. Static client files live in `public/`: `index.html` for the landing page, `teacher.html` for the teacher dashboard, `student.html` for players, `css/style.css` for shared styling, and `img/` for visual assets. Offline game content and module data are in `src/modules/index.js`. Keep generated dependencies in `node_modules/` out of source review.

## Build, Test, and Development Commands

- `npm install`: install Express, Socket.io, Nodemon, and other dependencies from `package-lock.json`.
- `npm start`: run the production-style server with `node server.js`.
- `npm run dev`: run the server with Nodemon for automatic restarts during development.

The app reads `process.env.PORT` when deployed; locally it should be available on the configured port, commonly `http://localhost:3000`.

## Coding Style & Naming Conventions

Use CommonJS JavaScript (`require`, `module.exports`) to match the existing server code. Prefer `const` by default and `let` only for reassigned values. Use two-space indentation in JavaScript, HTML, and CSS. Name functions with clear verbs, such as `createRoom`, `generateCode`, or `getRoomPublicState`. Keep CSS variables in `public/css/style.css` grouped by purpose and reuse the CUJAE palette variables instead of hard-coded colors where practical.

## Testing Guidelines

No automated test framework is currently configured. Before merging behavior changes, manually verify the teacher and student flows in separate browser sessions: room creation, joining, module selection, round progression, scoring, and disconnect handling. For future tests, prefer focused integration tests around Socket.io room state and LLM proxy error handling, with test files named `*.test.js`.

## Commit & Pull Request Guidelines

This directory does not currently include Git history, so no established commit convention was found. Use short, imperative commit messages such as `Add room cleanup on disconnect` or `Update prompt completion questions`. Pull requests should describe the user-facing change, list manual test steps, mention any OpenRouter/API impacts, and include screenshots when changing `public/*.html` or `public/css/style.css`.

## Security & Configuration Tips

Do not hard-code API keys. OpenRouter keys should remain teacher-provided and server-side only. Treat room state as ephemeral because it is stored in memory and resets when the server restarts.
