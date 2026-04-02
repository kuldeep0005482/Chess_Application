const getValidMoves = (board, row, col) => {
  const piece = board[row][col];
  if (!piece) return [];

  const type = piece[1].toLowerCase(); // p, r, n, b, q, k
  const color = piece[0]; // w or b

  switch (type) {
    case "p":
      return getPawnMoves(board, row, col, color);
    case "r":
      return getRookMoves(board, row, col, color);
    case "n":
      return getKnightMoves(board, row, col, color);
    case "b":
      return getBishopMoves(board, row, col, color);
    case "q":
      return getQueenMoves(board, row, col, color);
    case "k":
      return getKingMoves(board, row, col, color);
    default:
      return [];
  }
};

export default getValidMoves;
//********************************************** */
const getPawnMoves = (board, row, col, color) => {
  const moves = [];
  const dir = color === "w" ? -1 : 1;

  // forward move
  if (!board[row + dir]?.[col]) {
    moves.push(`${row + dir}-${col}`);
  }

  // double move (initial)
  if (
    (color === "w" && row === 6) ||
    (color === "b" && row === 1)
  ) {
    if (!board[row + dir]?.[col] && !board[row + 2 * dir]?.[col]) {
      moves.push(`${row + 2 * dir}-${col}`);
    }
  }

  // capture
  for (let dc of [-1, 1]) {
    const newCol = col + dc;
    const target = board[row + dir]?.[newCol];

    if (target && target[0] !== color) {
      moves.push(`${row + dir}-${newCol}`);
    }
  }

  return moves;
};

// ****************************************
const getRookMoves = (board, row, col, color) => {
  const moves = [];
  const directions = [
    [1, 0], [-1, 0], [0, 1], [0, -1]
  ];

  directions.forEach(([dr, dc]) => {
    let r = row + dr;
    let c = col + dc;

    while (r >= 0 && r < 8 && c >= 0 && c < 8) {
      if (!board[r][c]) {
        moves.push(`${r}-${c}`);
      } else {
        if (board[r][c][0] !== color) {
          moves.push(`${r}-${c}`); // capture
        }
        break; // stop
      }
      r += dr;
      c += dc;
    }
  });

  return moves;
};

// ***********************************

const getKnightMoves = (board, row, col, color) => {
  const moves = [];
  const steps = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2]
  ];

  steps.forEach(([dr, dc]) => {
    const r = row + dr;
    const c = col + dc;

    if (r >= 0 && r < 8 && c >= 0 && c < 8) {
      if (!board[r][c] || board[r][c][0] !== color) {
        moves.push(`${r}-${c}`);
      }
    }
  });

  return moves;
};

// ******************************************

const getBishopMoves = (board, row, col, color) => {
  const moves = [];
  const directions = [
    [1, 1], [1, -1], [-1, 1], [-1, -1]
  ];

  directions.forEach(([dr, dc]) => {
    let r = row + dr;
    let c = col + dc;

    while (r >= 0 && r < 8 && c >= 0 && c < 8) {
      if (!board[r][c]) {
        moves.push(`${r}-${c}`);
      } else {
        if (board[r][c][0] !== color) {
          moves.push(`${r}-${c}`);
        }
        break;
      }
      r += dr;
      c += dc;
    }
  });

  return moves;
};


// ******************************************************

const getQueenMoves = (board, row, col, color) => {
  return [
    ...getRookMoves(board, row, col, color),
    ...getBishopMoves(board, row, col, color),
  ];
};

// ****************************************************

const getKingMoves = (board, row, col, color) => {
  const moves = [];
  const directions = [
    [1,0], [-1,0], [0,1], [0,-1],
    [1,1], [1,-1], [-1,1], [-1,-1]
  ];

  directions.forEach(([dr, dc]) => {
    const r = row + dr;
    const c = col + dc;

    if (r >= 0 && r < 8 && c >= 0 && c < 8) {
      if (!board[r][c] || board[r][c][0] !== color) {
        moves.push(`${r}-${c}`);
      }
    }
  });

  return moves;
};