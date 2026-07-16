import { FILES } from "../lib/chessEngine.js";
import PIECES from "../lib/PIECES.js";

export const squareName = (r, c) => `${FILES[c]}${8 - r}`;

export default function InteractiveBoard({
  board,
  playerColor = "white", // "white" | "black"
  selected,
  legalMoves,
  lastMove,
  onSquareClick,
}) {
  const displayBoard =
    playerColor === "white"
      ? board
      : [...board]
        .reverse()
        .map((row) => [...row].reverse());

  const displayFiles =
    playerColor === "white"
      ? FILES
      : [...FILES].reverse();

  const isLegalTarget = (r, c) =>
    legalMoves.some((m) => m.r === r && m.c === c);

  return (
    <div className="relative z-10 w-full h-full overflow-hidden shadow-2xl">
      {/* Background Glow */}
      <div
        className="absolute inset-0 z-0 blur-[18px]"
        style={{
          background:
            "radial-gradient(circle, rgba(116,115,136,0.22), transparent 70%)",
        }}
      />

      {/* Glass Container */}
      <div className="glass relative z-10 h-full w-full overflow-hidden rounded-none">
        <div
          className="grid h-full w-full overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(8, 1fr)",
            gridTemplateRows: "repeat(8, 1fr)",
          }}
        >
          {displayBoard.map((row, displayR) =>
            row.map((cell, displayC) => {
              // Convert displayed coordinates -> actual board coordinates
              const r =
                playerColor === "white" ? displayR : 7 - displayR;

              const c =
                playerColor === "white" ? displayC : 7 - displayC;

              const dark = (r + c) % 2 === 1;

              const isSelected =
                selected &&
                selected.r === r &&
                selected.c === c;

              const isLegal = isLegalTarget(r, c);

              const isLastMove =
                lastMove &&
                ((lastMove.from.r === r &&
                  lastMove.from.c === c) ||
                  (lastMove.to.r === r &&
                    lastMove.to.c === c));

              const pieceHere = cell !== " ";

              return (
                <button
                  key={`${displayR}-${displayC}`}
                  onClick={() => onSquareClick(r, c)}
                  className={`relative flex items-center justify-center
                    transition-all duration-150 border-0 outline-none

                    ${isSelected
                      ? "bg-[rgba(212,175,106,0.35)]"
                      : isLastMove
                        ? "bg-[rgba(111,166,255,0.30)]"
                        : dark
                          ? "bg-[#747388]"
                          : "bg-[#FAFAFB]"
                    }
                  `}
                >
                  {/* File Letters */}
                  {displayR === 7 && (
                    <span className="absolute bottom-0.5 right-1 font-mono text-[9px] text-black/45">
                      {displayFiles[displayC]}
                    </span>
                  )}

                  {/* Rank Numbers */}
                  {displayC === 0 && (
                    <span className="absolute top-0.5 left-1 font-mono text-[9px] text-black/45">
                      {playerColor === "white"
                        ? 8 - displayR
                        : displayR + 1}
                    </span>
                  )}

                  {/* Legal Move */}
                  {isLegal && !pieceHere && (
                    <span className="w-[24%] h-[24%] rounded-full bg-[rgba(111,166,255,0.65)]" />
                  )}

                  {/* Capture Highlight */}
                  {isLegal && pieceHere && (
                    <span className="absolute inset-[6%] rounded-lg ring-[3px] ring-[rgba(255,106,106,0.8)]" />
                  )}

                  {/* Chess Piece */}
                  {pieceHere && (
                    <img
                      src={PIECES[cell].image}
                      alt={PIECES[cell].name}
                      draggable={false}
                      className="
                        relative
                        z-10
                        w-[78%]
                        h-[78%]
                        object-contain
                        select-none
                        pointer-events-none
                        transition-transform
                        duration-150
                        hover:scale-105
                      "
                    />
                  )}
                </button>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}