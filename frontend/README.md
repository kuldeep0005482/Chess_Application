# ChessEngine Frontend

A React + Tailwind CSS frontend for a chess app, built around the visual style of the
provided Home page (deep navy glass UI, purple/blue gradients, Fraunces + Manrope + JetBrains Mono).

## Pages
- `/` — Home dashboard (matches the original design exactly)
- `/login` — Login
- `/signup` — Sign up
- `/play` — Fully playable chess board (click a piece, see legal moves highlighted, click to move)
- `/lobby` — Open game seats
- `/tournaments` — Tournament listings
- `/players` — Player directory
- `/stats` — Personal stats & game history
- `/settings` — Profile & preferences
- `/support` — Help & contact

## Chess engine
`src/lib/chessEngine.js` is a small, dependency-free move generator:
- **Pawns**: single push, double push from the starting rank, diagonal captures,
  and auto-promotion to a queen on reaching the last rank.
- **Knights, bishops, rooks, queens, kings**: standard movement and capturing.
- Turn alternates between white and black; captured pieces and a move list are
  tracked in `src/pages/Play.jsx`.
- Not implemented (kept out of scope intentionally): check/checkmate detection,
  castling, en passant, and draw rules. The board still fully prevents moving
  to illegal squares for every piece type.

## Getting started
```bash
cd frontend
npm install
npm run dev
```
Then open the printed local URL (default `http://localhost:5173`).

## Build
```bash
npm run build
npm run preview
```

## Stack
- React 18 + Vite
- Tailwind CSS
- react-router-dom (client-side routing)
- framer-motion (page/element animation)
- lucide-react (icons)
