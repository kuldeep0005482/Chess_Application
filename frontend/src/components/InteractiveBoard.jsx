import { PIECE_GLYPH, FILES } from "../lib/chessEngine.js";

export const squareName = (r, c) => `${FILES[c]}${8 - r}`;

export default function InteractiveBoard({
  board,
  selected,
  legalMoves,
  lastMove,
  onSquareClick,
}) {
  const isLegalTarget = (r, c) => legalMoves.some((m) => m.r === r && m.c === c);

  return (
    <div className="relative flex justify-center py-1.5">
      <div
        className="absolute w-[460px] h-[460px] blur-[10px] z-0"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.22), transparent 65%)" }}
      />
      <div className="glass relative z-10 p-3.5 rounded-[22px]">
        <div
          className="grid rounded-[10px] overflow-hidden shadow-glow"
          style={{
            gridTemplateColumns: "repeat(8, 1fr)",
            gridTemplateRows: "repeat(8, 1fr)",
            width: "min(460px, 86vw)",
            height: "min(460px, 86vw)",
          }}
        >
          {board.map((row, r) =>
            row.map((cell, c) => {
              const dark = (r + c) % 2 === 1;
              const isSelected = selected && selected.r === r && selected.c === c;
              const isLegal = isLegalTarget(r, c);
              const isLastMove =
                lastMove &&
                ((lastMove.from.r === r && lastMove.from.c === c) ||
                  (lastMove.to.r === r && lastMove.to.c === c));
              const pieceHere = cell !== " ";

              return (
                <button
                  key={`${r}-${c}`}
                  onClick={() => onSquareClick(r, c)}
                  className={
                    "relative flex items-center justify-center border-0 outline-none cursor-pointer transition-colors duration-150 " +
                    (isSelected
                      ? "!bg-[rgba(212,175,106,0.35)]"
                      : isLastMove
                      ? "bg-[rgba(139,92,246,0.22)]"
                      : dark
                      ? "bg-[#101d38]"
                      : "bg-[#1b2c50]")
                  }
                >
                  {r === 7 && (
                    <span className="absolute bottom-0.5 right-1 font-mono text-[9px] text-white/30">
                      {FILES[c]}
                    </span>
                  )}
                  {c === 0 && (
                    <span className="absolute top-0.5 left-1 font-mono text-[9px] text-white/30">
                      {8 - r}
                    </span>
                  )}

                  {isLegal && !pieceHere && (
                    <span className="w-[26%] h-[26%] rounded-full bg-[rgba(139,92,246,0.55)]" />
                  )}
                  {isLegal && pieceHere && (
                    <span className="absolute inset-[6%] rounded-[6px] ring-[3px] ring-[rgba(248,113,113,0.75)]" />
                  )}

                  {pieceHere && (
                    <span
                      className="select-none leading-none relative z-10"
                      style={{
                        fontSize: "clamp(20px, 4.6vw, 32px)",
                        color: cell === cell.toUpperCase() ? "#f3f1ff" : "#0a1024",
                        filter:
                          cell === cell.toUpperCase()
                            ? "drop-shadow(0 1px 2px rgba(0,0,0,0.4))"
                            : "drop-shadow(0 1px 1px rgba(255,255,255,0.25))",
                      }}
                    >
                      {PIECE_GLYPH[cell]}
                    </span>
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
