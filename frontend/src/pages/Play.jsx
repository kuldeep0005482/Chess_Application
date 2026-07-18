import { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import Layout from "../components/Layout.jsx";
import { RotateCcw, Circle } from "lucide-react";
import { AppContext } from "../context/AppContext.jsx";
import useChessGame from "../hooks/useChessGame.js";
import MoveHistoryCard from "../components/MoveHistoryCard.jsx";
import CapturedPiecesCard from "../components/CapturedPiecesCard.jsx";
import BoardSection from "../components/BoardSection.jsx";
import PlayPanel from "../components/PlayPanel/PlayPanel.jsx";
import GameStartPanel from "../components/GameStartPanel.jsx";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Play() {
  const [gameStatus, setGameStatus] = useState("idle");
  const { userData } = useContext(AppContext);
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
    <Layout>
      <div className="grid grid-cols-1 gap-6 items-start xl:grid-cols-[minmax(0,1fr)_540px] ">
        <div className=" ">
          <BoardSection />
        </div>

        <motion.div className=" mt-4 lg:mt-1  shrink-0 flex flex-col" initial="hidden" animate="show" variants={fadeUp}>
          {gameStatus === "idle" ? (
            <PlayPanel />
          ) : (
            <GameStartPanel />
          )}

        </motion.div>
      </div>
    </Layout>
  );
}
