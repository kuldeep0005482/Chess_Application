const createInitialBoard = () => {
  const board = Array(8).fill(null).map(() => Array(8).fill(null));

  // Pawns
  for (let i = 0; i < 8; i++) {
    board[1][i] = 'bp';
    board[6][i] = 'wp';
  }

  // Rooks
  board[0][0] = board[0][7] = 'br';
  board[7][0] = board[7][7] = 'wr';

  // Knights
  board[0][1] = board[0][6] = 'bn';
  board[7][1] = board[7][6] = 'wn';

  // Bishops
  board[0][2] = board[0][5] = 'bb';
  board[7][2] = board[7][5] = 'wb';

  // Queens
  board[0][3] = 'bq';
  board[7][3] = 'wq';

  // Kings
  board[0][4] = 'bk';
  board[7][4] = 'wk';

  return board;
};

export default createInitialBoard;