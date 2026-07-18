import React from 'react'
import useChessGame from '../hooks/useChessGame'

function MoveHistoryCard() {
    const{
        history
    } = useChessGame();
  return (
   <div className="glass p-[18px]">
            <h3 className="font-display text-[15px] font-semibold mb-3.5">Move History</h3>
            {history.length === 0 ? (
              <p className="text-xs text-faint">No moves played yet.</p>
            ) : (
              <div className="grid grid-cols-2 gap-1.5 font-mono text-[12.5px] max-h-[220px] overflow-y-auto pr-1">
                {history.map((move, i) => (
                  <span key={i} className="text-dim">
                    {i % 2 === 0 ? `${i / 2 + 1}.` : ""} {move}
                  </span>
                ))}
              </div>
            )}
          </div>
  )
}

export default MoveHistoryCard