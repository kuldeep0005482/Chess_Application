// Lightweight chess move engine.
// Board orientation matches the visual board: row 0 = rank 8 (black home rows),
// row 7 = rank 1 (white home rows). Uppercase letters = white pieces, lowercase = black.
// Note: this engine implements standard piece movement + capturing + pawn promotion
// (auto-promotes to queen) and pawn double-step / diagonal captures. It intentionally
// does NOT implement check/checkmate detection, castling, or en-passant, in order to
// keep the rules focused and easy to follow - pawns are fully and correctly handled.

export const FILES = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function createInitialBoard() {
  return [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ];
}

export const PIECE_GLYPH = {
  K: "♔",
  Q: "♕",
  R: "♖",
  B: "♗",
  N: "♘",
  P: "♙",
  k: "♚",
  q: "♛",
  r: "♜",
  b: "♝",
  n: "♞",
  p: "♟",
};

const inBounds = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
const isEmpty = (board, r, c) => board[r][c] === " ";
const pieceColor = (piece) => {
  if (piece === " ") return null;
  return piece === piece.toUpperCase() ? "w" : "b";
};

function slide(board, r, c, color, deltas) {
  const moves = [];
  for (const [dr, dc] of deltas) {
    let nr = r + dr;
    let nc = c + dc;
    while (inBounds(nr, nc)) {
      if (isEmpty(board, nr, nc)) {
        moves.push({ r: nr, c: nc, capture: false });
      } else {
        if (pieceColor(board[nr][nc]) !== color) {
          moves.push({ r: nr, c: nc, capture: true });
        }
        break;
      }
      nr += dr;
      nc += dc;
    }
  }
  return moves;
}

function step(board, r, c, color, deltas) {
  const moves = [];
  for (const [dr, dc] of deltas) {
    const nr = r + dr;
    const nc = c + dc;
    if (!inBounds(nr, nc)) continue;
    if (isEmpty(board, nr, nc) || pieceColor(board[nr][nc]) !== color) {
      moves.push({ r: nr, c: nc, capture: !isEmpty(board, nr, nc) });
    }
  }
  return moves;
}

function pawnMoves(board, r, c, color) {
  const moves = [];
  const dir = color === "w" ? -1 : 1;
  const startRow = color === "w" ? 6 : 1;
  const promoRow = color === "w" ? 0 : 7;

  // Single push
  const oneRow = r + dir;
  if (inBounds(oneRow, c) && isEmpty(board, oneRow, c)) {
    moves.push({ r: oneRow, c, capture: false, promotion: oneRow === promoRow });

    // Double push from starting row
    const twoRow = r + dir * 2;
    if (r === startRow && isEmpty(board, twoRow, c)) {
      moves.push({ r: twoRow, c, capture: false, promotion: false });
    }
  }

  // Diagonal captures
  for (const dc of [-1, 1]) {
    const nr = r + dir;
    const nc = c + dc;
    if (!inBounds(nr, nc)) continue;
    if (!isEmpty(board, nr, nc) && pieceColor(board[nr][nc]) !== color) {
      moves.push({ r: nr, c: nc, capture: true, promotion: nr === promoRow });
    }
  }

  return moves;
}

export function getLegalMoves(board, r, c) {
  const piece = board[r][c];
  if (piece === " ") return [];
  const color = pieceColor(piece);
  const type = piece.toUpperCase();

  switch (type) {
    case "P":
      return pawnMoves(board, r, c, color);
    case "N":
      return step(board, r, c, color, [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1],
      ]);
    case "B":
      return slide(board, r, c, color, [[-1, -1], [-1, 1], [1, -1], [1, 1]]);
    case "R":
      return slide(board, r, c, color, [[-1, 0], [1, 0], [0, -1], [0, 1]]);
    case "Q":
      return slide(board, r, c, color, [
        [-1, -1], [-1, 1], [1, -1], [1, 1],
        [-1, 0], [1, 0], [0, -1], [0, 1],
      ]);
    case "K":
      return step(board, r, c, color, [
        [-1, -1], [-1, 0], [-1, 1], [0, -1],
        [0, 1], [1, -1], [1, 0], [1, 1],
      ]);
    default:
      return [];
  }
}

export function movePiece(board, from, to, move) {
  const next = board.map((row) => [...row]);
  let piece = next[from.r][from.c];
  if (move?.promotion) {
    piece = pieceColor(piece) === "w" ? "Q" : "q";
  }
  next[to.r][to.c] = piece;
  next[from.r][from.c] = " ";
  return next;
}

export function getPieceColor(piece) {
  return pieceColor(piece);
}
