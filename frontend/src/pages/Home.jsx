import { motion } from "framer-motion";
import {
  Swords,
  Bot,
  UserPlus,
  Trophy,
  Shuffle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import StaticBoard from "../components/StaticBoard.jsx";
import PlayerStrip from "../components/PlayerStrip.jsx";
import { connectSocket } from "../socket/connectSocket.js";
import { findMatch, roomJoin, onSearching, onMatchFound, gameStart } from "../socket/matchMakingSocket.js";
import socket from "../socket/socket.js";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useGame } from "../context/GameContext.jsx";
import NormalLoader from "../components/ui/NormalLoader.jsx";
import { SOCKET_EVENTS } from "../socket/events.js";
import ActionCard from "../components/ActionCard.jsx";
import QuickStats from "../components/QuickStats.jsx";
import RecentActivity from "../components/RecentActivity.jsx";
import useMatchmaking from "../hooks/useMatchmaking.js";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export default function Home() {

  const { userData } = useContext(AppContext);
  const navigate = useNavigate();
  const { matchmakingStatus, setMatchmakingStatus, } = useGame();
  const { playOnline } = useMatchmaking(
    userData,
    matchmakingStatus,
    setMatchmakingStatus
  );




  const handlePlayOnline = async () => {
    // Prevent multiple matchmaking requests
    if (matchmakingStatus === "searching") {
      return;
    }

    try {
      // User validation
      if (!userData?.userId) {
        throw new Error("User is not authenticated.");
      }
      setMatchmakingStatus("connecting");
      // Connect socket only if needed
      if (!socket.connected) {
        await connectSocket();
      }
      setMatchmakingStatus("searching");
      findMatch(userData);
    } catch (error) {
      console.error("Failed to start matchmaking:", error);

      setMatchmakingStatus("idle");

      // Optional: Show a toast notification
      // toast.error("Unable to connect. Please try again.");
    }
  };

  const ACTION_CARDS = [
    { icon: Swords, title: "Play Online", subtitle: "Real players worldwide", tag: "1.e4", featured: true, to: "/play/online"},
    { icon: Bot, title: "Play Bots", subtitle: "Practice against AI", tag: "Nf3", featured: false, to: "/play" },
    { icon: UserPlus, title: "Play a Friend", subtitle: "Invite and challenge friends", tag: "O-O", featured: false, to: "/players" },
    { icon: Trophy, title: "Tournaments", subtitle: "Compete and climb rankings", tag: "Qxd8+", featured: false, to: "/tournaments" },
    { icon: Shuffle, title: "Chess Variants", subtitle: "Explore different game modes", tag: "0-0-0", featured: false, to: "/play" },
  ];

  const showLoader = ["connecting", "searching"].includes(matchmakingStatus);

  return (
    <>
      {showLoader && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 backdrop-blur-[1px]">
          <NormalLoader />
        </div>
      )}
      <Layout>
        <div className="overflow-x-hidden flex flex-col lg:flex-row gap-5 items-stretch lg:items-start">
          <motion.div
            className="flex-1 min-w-0 w-full flex flex-col gap-[18px]"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <motion.div className="px-1" variants={fadeUp}>
              <span className="font-mono text-[11.5px] text-purple uppercase tracking-[0.12em] flex items-center gap-2 before:content-[''] before:w-[22px] before:h-px before:bg-gradient-to-r before:from-purple before:to-transparent">
                Live position &middot; Giuoco Piano
              </span>
              <h1 className="font-display font-semibold leading-[1.08] mt-2 mb-1 text-[clamp(28px,3.4vw,40px)]">
                Welcome Back, <span className="hero-title-accent">Grandmaster</span>
              </h1>
              <p className="text-dim text-[14.5px]">Ready for your next victory?</p>
            </motion.div>

            <motion.div className="flex w-full min-w-0 flex-col items-center gap-2.5" variants={fadeUp}>
              <div className="flex w-full max-w-[360px] flex-col gap-2.5 sm:max-w-[420px]">
                <PlayerStrip name="VolkovK_92" elo={2148} color="black" clock="08:42" top />
                <StaticBoard />
                <PlayerStrip name="Arjun Kade" elo={2156} color="white" clock="09:15" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full min-w-0 lg:w-[360px] flex-shrink-0 flex flex-col gap-4"
            initial="hidden"
            animate="show"
            variants={containerVariants}
          >
            <motion.div className="flex flex-col gap-2.5" variants={containerVariants}>
              {ACTION_CARDS.map((card) => (
                <ActionCard key={card.title} {...card} />
              ))}
            </motion.div>
            <QuickStats />
            <RecentActivity />
          </motion.div>
        </div>
      </Layout>
    </>
  );
}
