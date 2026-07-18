import React from 'react';
import MoveHistoryCard from './MoveHistoryCard';
import CapturedPiecesCard from './CapturedPiecesCard';
import useChessGame from '../hooks/useChessGame';
import { RotateCcw, Circle } from "lucide-react";

function GameStartPanel() {

    const {
        turn,
        selected,
        legalMoves,
        history,
        captured,
        lastMove,
        onSquareClick,
        resetGame,
      } = useChessGame();
    return (
        <div>
            <div className="glass p-[18px] ">
                <div className="flex items-center justify-between mb-3.5">
                    <h3 className="font-display text-[15px] font-semibold">Turn</h3>
                    <button
                        onClick={resetGame}
                        className="flex items-center gap-1.5 text-xs text-dim hover:text-ink transition-colors"
                    >
                        <RotateCcw size={13} /> New Game
                    </button>
                </div>
                <div className="flex items-center gap-2.5">
                    <Circle
                        size={14}
                        className={turn === "w" ? "text-[#f3f1ff] fill-current" : "text-[#0a1024] fill-current"}
                        style={{ filter: "drop-shadow(0 0 4px rgba(255,255,255,0.4))" }}
                    />
                    <span className="text-[14px] font-semibold">
                        {turn === "w" ? "White to move" : "Black to move"}
                    </span>
                </div>
            </div>

            <CapturedPiecesCard captured={captured} />

            <MoveHistoryCard />
        </div>
    )
}

export default GameStartPanel