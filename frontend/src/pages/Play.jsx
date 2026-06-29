import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Circle } from "lucide-react";
import Layout from "../components/Layout.jsx";
import PlayerStrip from "../components/PlayerStrip.jsx";
import InteractiveBoard, { squareName } from "../components/InteractiveBoard.jsx";
import {
  createInitialBoard,
  getLegalMoves,
  movePiece,
  getPieceColor,
  PIECE_GLYPH,
} from "../lib/chessEngine.js";
import { AppContext } from "../context/AppContext.jsx";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Play() {
  const {userData} = useContext(AppContext);
  const [board, setBoard] = useState(createInitialBoard());
  const [turn, setTurn] = useState("w");
  const [selected, setSelected] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);
  const [lastMove, setLastMove] = useState(null);
  const [history, setHistory] = useState([]);
  const [captured, setCaptured] = useState({ w: [], b: [] });

  const resetGame = () => {
    setBoard(createInitialBoard());
    setTurn("w");
    setSelected(null);
    setLegalMoves([]);
    setLastMove(null);
    setHistory([]);
    setCaptured({ w: [], b: [] });
  };

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
          return { ...prev, [side]: [...prev[side], capturePiece] };
        });
      }

      const pieceLetter = movingPiece.toUpperCase() === "P" ? "" : movingPiece.toUpperCase();
      const notation = `${pieceLetter}${move.capture ? "x" : ""}${squareName(r, c)}${move.promotion ? "=Q" : ""}`;
      setHistory((prev) => [...prev, notation]);

      setLastMove({ from: selected, to: { r, c } });
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

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        <motion.div className="flex-1 min-w-0 flex flex-col gap-[18px]" initial="hidden" animate="show" variants={fadeUp}>
          {/* <div className="px-1">
            <span className="font-mono text-[11.5px] text-purple uppercase tracking-[0.12em] flex items-center gap-2 before:content-[''] before:w-[22px] before:h-px before:bg-gradient-to-r before:from-purple before:to-transparent">
              Local Match &middot; No clock
            </span>
            <h1 className="font-display font-semibold leading-[1.08] mt-2 mb-1 text-[clamp(26px,3vw,36px)]">
              Play <span className="hero-title-accent">Chess</span>
            </h1>
            <p className="text-dim text-[14.5px]">
              Click a piece to see its legal moves, then click a highlighted square to move.
            </p>
          </div> */}

          <div className="flex flex-col gap-2.5 items-center">
            <PlayerStrip name="VolkovK_92" elo={2148} color="black" clock="--:--" top />
            <InteractiveBoard
              board={board}
              selected={selected}
              legalMoves={legalMoves}
              lastMove={lastMove}
              onSquareClick={onSquareClick}
            />
            <PlayerStrip name = {userData.name} elo={userData.rating} color="white" clock="--:--" />
          </div>
        </motion.div>

        <motion.div className="w-full lg:w-[340px] flex-shrink-0 flex flex-col gap-4" initial="hidden" animate="show" variants={fadeUp}>
          <div className="glass p-[18px]">
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
                      {PIECE_GLYPH[p]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

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
        </motion.div>
      </div>
    </Layout>
  );
}
