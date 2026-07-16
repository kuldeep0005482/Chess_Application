import { PIECE_GLYPH, FILES } from "../lib/chessEngine.js";

// Mid-game position (Italian Game, Giuoco Piano)
const BOARD = [
  ["r", "n", "b", "q", "k", "b", " ", "r"],
  ["p", "p", "p", "p", " ", "p", "p", "p"],
  [" ", " ", "n", " ", " ", " ", " ", " "],
  [" ", " ", "b", " ", "p", " ", " ", " "],
  [" ", " ", "B", " ", "P", " ", " ", " "],
  [" ", " ", "P", " ", " ", "N", " ", " "],
  ["P", "P", " ", "P", " ", "P", "P", "P"],
  ["R", "N", "B", "Q", "K", " ", " ", "R"],
];

export default function StaticBoard() {
  return (
    <div className="relative flex w-full justify-center py-1.5">
      <div
        className="absolute inset-0 z-0 blur-[10px]"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.22), transparent 65%)" }}
      />
      <div className="glass relative z-10 w-full p-3.5 rounded-[22px]">
        <div
          className="grid w-full aspect-square rounded-[10px] overflow-hidden shadow-glow"
          style={{
            gridTemplateColumns: "repeat(8, 1fr)",
            gridTemplateRows: "repeat(8, 1fr)",
          }}
        >
          {BOARD.map((row, r) =>
            row.map((cell, c) => {
              const dark = (r + c) % 2 === 1;
              const isLastMove = (r === 4 && c === 4) || (r === 3 && c === 2);
              return (
                <div
                  key={`${r}-${c}`}
                  className={
                    "relative flex items-center justify-center " +
                    (isLastMove ? "bg-[rgba(139,92,246,0.28)]" : dark ? "bg-[#101d38]" : "bg-[#1b2c50]")
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
                  {cell !== " " && (
                    <span
                      className="select-none leading-none"
                      style={{
                        fontSize: "clamp(20px, 4.2vw, 30px)",
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
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
