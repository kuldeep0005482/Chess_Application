import React from 'react';
import useChessGame from '../hooks/useChessGame';
import PIECES from '../lib/PIECES';

function CapturedPiecesCard({captured}) {


  return (
     <div className="glass p-[18px]">
                <h3 className="font-display text-[15px] font-semibold mb-3.5">Captured Pieces</h3>
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 min-h-[28px]">
                    <span className="text-[11px] text-faint w-12">White</span>
                    <div className="flex gap-1 text-xl flex-wrap">
                      {captured.b.map((p, i) => (
                        <span key={i} className="text-[#0a1024]" style={{ filter: "drop-shadow(0 1px 1px rgba(255,255,255,0.4))" }}>
                          {PIECE_GLYPH[p]}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 min-h-[28px]">
                    <span className="text-[11px] text-faint w-12">Black</span>
                    <div className="flex gap-1 text-xl flex-wrap">
                      {captured.w.map((p, i) => (
                        <span key={i} className="text-[#f3f1ff]" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))" }}>
                          {PIECES[p]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default CapturedPiecesCard