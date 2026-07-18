// src/hooks/useChessGame.js

import { useState } from "react";
import {
  createInitialBoard,
  getLegalMoves,
  movePiece,
  getPieceColor,
} from "../lib/chessEngine.js";
import { squareName } from "../components/InteractiveBoard.jsx";

export default function useChessGame() {
  const [board, setBoard] = useState(createInitialBoard());
  const [turn, setTurn] = useState("w");
  const [selected, setSelected] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [history, setHistory] = useState([]);
  const [captured, setCaptured] = useState({ w: [], b: [] });
  const [lastMove, setLastMove] = useState(null);

  const onSquareClick = (r, c) => {
    const piece = board[r][c];
    const colorHere = getPieceColor(piece);

    if (!selected) {
      if (colorHere === turn) {
        setSelected({ r, c });
        setLegalMoves(getLegalMoves(board, r, c));
      }
      return;
    }

    if (selected.r === r && selected.c === c) {
      setSelected(null);
      setLegalMoves([]);
      return;
    }

    const move = legalMoves.find((m) => m.r === r && m.c === c);

    if (move) {
      const movingPiece = board[selected.r][selected.c];
      const capturePiece = board[r][c];
      const nextBoard = movePiece(board, selected, { r, c }, move);

      setBoard(nextBoard);

      if (move.capture && capturePiece !== " ") {
        setCaptured((prev) => {
          const side = getPieceColor(capturePiece);
          return {
            ...prev,
            [side]: [...prev[side], capturePiece],
          };
        });
      }

      const pieceLetter =
        movingPiece.toUpperCase() === "P"
          ? ""
          : movingPiece.toUpperCase();

      const notation = `${pieceLetter}${
        move.capture ? "x" : ""
      }${squareName(r, c)}${move.promotion ? "=Q" : ""}`;

      setHistory((prev) => [...prev, notation]);

      setLastMove({
        from: selected,
        to: { r, c },
      });

      setTurn((t) => (t === "w" ? "b" : "w"));

      setSelected(null);
      setLegalMoves([]);

      return;
    }

    if (colorHere === turn) {
      setSelected({ r, c });
      setLegalMoves(getLegalMoves(board, r, c));
    } else {
      setSelected(null);
      setLegalMoves([]);
    }
  };

  const resetGame = () => {
    setBoard(createInitialBoard());
    setTurn("w");
    setSelected(null);
    setLegalMoves([]);
    setLastMove(null);
    setHistory([]);
    setCaptured({ w: [], b: [] });
  };

  return {
    board,
    turn,
    selected,
    legalMoves,
    history,
    captured,
    lastMove,
    onSquareClick,
    resetGame,
  };
}