import React, { useState, useEffect } from 'react'
import Square from './Square'
import createInitialBoard from '../../utils/createInitialBoard';
import getValidMoves from '../../utils/getValidMoves';

function ChessBoard() {

  const [board, setBoard] = useState(createInitialBoard());
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [validMoves, setValidMoves] = useState([]);
  const [turn, setTurn] = useState('w');


  useEffect(() => {
    if (!selectedSquare) {
      setValidMoves([]);
      return;
    }

    const [row, col] = selectedSquare.split("-").map(Number);
    const moves = getValidMoves(board, row, col);
    setValidMoves(moves);

  }, [selectedSquare, board]);

  const handelSquareClick = (row, col) => {
    const square = `${row}-${col}`;
    const clickedPiece = board[row][col];

    // prevent selecting empty square initially
    if (!selectedSquare && !clickedPiece) return;

    // First selection (only allow current turn)
    if (!selectedSquare) {
      if (clickedPiece && clickedPiece[0] === turn) {
        setSelectedSquare(square);
      }
      return;
    }

    //  deselect
    if (selectedSquare === square) {
      setSelectedSquare(null);
      return;
    }

    // move if valid
    if (validMoves.includes(square)) {
      movePiece(selectedSquare, square);
      setSelectedSquare(null);



      return;
    }

    // change selection (only same color as turn)
    if (clickedPiece && clickedPiece[0] === turn) {
      setSelectedSquare(square);
    }
  };


  const movePiece = (from, to) => {
    const newBoard = board.map(row => [...row]);

    const [fromRow, fromCol] = from.split("-").map(Number);
    const [toRow, toCol] = to.split("-").map(Number);

    newBoard[toRow][toCol] = newBoard[fromRow][fromCol];
    newBoard[fromRow][fromCol] = null;
    setTurn(turn === 'w' ? 'b' : 'w');
    setBoard(newBoard);
  };

  return (
    <div className="w-full h-full grid grid-cols-8 grid-rows-8 border border-[#1b263b] rounded-xl overflow-hidden">
      {board.flat().map((piece, index) => {
        const row = Math.floor(index / 8);
        const col = index % 8;
        const isDark = (row + col) % 2 === 1;

        return (
          <Square
            key={index}
            isDark={isDark}
            piece={piece}
            selected={selectedSquare === `${row}-${col}`}
            onClick={() => handelSquareClick(row, col)}
            isValidMove={validMoves.includes(`${row}-${col}`)}
          />
        );
      })}
    </div>
  )
}

export default ChessBoard;