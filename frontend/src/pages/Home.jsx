import { motion } from "framer-motion";
import {
  Swords,
  Bot,
  UserPlus,
  Trophy,
  Shuffle,
  Flame,
  TrendingUp,
  TrendingDown,
  Gauge,
  Target,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import StaticBoard from "../components/StaticBoard.jsx";
import PlayerStrip from "../components/PlayerStrip.jsx";
import { connectSocket } from "../socket/connectSocket.js";
import { findMatch } from "../socket/matchMakingSocket.js";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext.jsx";
import { useGame } from "../context/GameContext.jsx";
import NormalLoader from "../components/ui/NormalLoader.jsx";


const RECENT_GAMES = [
  { opponent: "VolkovK_92", result: "Win", delta: 8, time: "12m ago" },
  { opponent: "QuietBishop", result: "Loss", delta: -6, time: "1h ago" },
  { opponent: "EndgameEcho", result: "Win", delta: 11, time: "3h ago" },
];

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } };
const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

function ActionCard({ icon: Icon, title, subtitle, tag, featured, to, onClick }) {
  return (
    <motion.div variants={fadeUp} whileHover={{ y: -3, scale: 1.012 }} whileTap={{ scale: 0.985 }}>
      <Link
        to={to}
        onClick={(event) => {
          if (onClick) {
            event.preventDefault();
            onClick();
          }
        }}
        className={
          "glass flex items-center gap-[13px] p-3.5 rounded-2xl transition-all duration-200 hover:border-[rgba(139,92,246,0.4)] hover:bg-white/[0.065] " +
          (featured
            ? "bg-gradient-to-br from-[rgba(139,92,246,0.14)] to-[rgba(59,130,246,0.09)] border-[rgba(139,92,246,0.3)]"
            : "")
        }
      >
        <div className="w-[42px] h-[42px] flex-shrink-0 rounded-xl flex items-center justify-center text-[#d8d3ff] bg-gradient-to-br from-[rgba(139,92,246,0.25)] to-[rgba(59,130,246,0.2)]">
          <Icon size={22} strokeWidth={2} />
        </div>
        <div className="flex flex-col gap-0.5 flex-1 min-w-0">
          <span className="text-[14.5px] font-bold">{title}</span>
          <span className="text-xs text-dim">{subtitle}</span>
        </div>
        <span className="notation-tag">{tag}</span>
        <ChevronRight size={18} className="text-faint flex-shrink-0" />
      </Link>
    </motion.div>
  );
}

function QuickStats() {
  const stats = [
    { label: "Rating", value: "2,156", icon: Gauge },
    { label: "Games Played", value: "1,284", icon: Swords },
    { label: "Win Rate", value: "64%", icon: Target },
    { label: "Current Streak", value: "5 Wins", icon: Flame },
  ];
  return (
    <motion.div variants={fadeUp} className="glass p-[18px]">
      <h3 className="font-display text-[15px] font-semibold mb-3.5">Quick Stats</h3>
      <div className="grid grid-cols-2 gap-2.5">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="flex flex-col gap-[5px] p-3 rounded-xl bg-white/[0.035] border border-white/[0.06]">
            <Icon size={15} className="text-purple" />
            <span className="font-mono text-[17px] font-semibold">{value}</span>
            <span className="text-[11px] text-dim">{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function RecentActivity() {
  return (
    <motion.div variants={fadeUp} className="glass p-[18px]">
      <h3 className="font-display text-[15px] font-semibold mb-3.5">Recent Activity</h3>
      <div className="flex flex-col gap-[9px]">
        {RECENT_GAMES.map((g, i) => (
          <div key={i} className="flex items-center gap-[11px] px-2.5 py-2.5 rounded-[11px] bg-white/[0.03]">
            <div
              className={
                "w-[26px] h-[26px] rounded-lg flex items-center justify-center text-xs font-extrabold flex-shrink-0 " +
                (g.result === "Win" ? "bg-[rgba(52,211,153,0.15)] text-win" : "bg-[rgba(248,113,113,0.15)] text-loss")
              }
            >
              {g.result === "Win" ? "W" : "L"}
            </div>
            <div className="flex flex-col gap-px flex-1 min-w-0">
              <span className="text-[12.5px] font-semibold">vs {g.opponent}</span>
              <span className="text-[10.5px] text-faint">{g.time}</span>
            </div>
            <span className={"font-mono text-xs font-semibold flex items-center gap-[3px] " + (g.delta >= 0 ? "text-win" : "text-loss")}>
              {g.delta >= 0 ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
              {g.delta >= 0 ? `+${g.delta}` : g.delta}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Home() {

  const { userData } = useContext(AppContext);
  const navigate = useNavigate();
  const {
  matchmakingStatus,
  setMatchmakingStatus,
} = useGame();

  useEffect(() => {
    if (matchmakingStatus === "matchFound") {
      navigate("/play");
    }
  }, [matchmakingStatus, navigate]);


  const handlePlayOnline = async () => {
  try {
    if (!userData) {
      console.error("User data not found");
      return;
    }

    connectSocket();

    setMatchmakingStatus("searching");

    findMatch(userData);
  } catch (error) {
    console.error("Matchmaking Error:", error);
    setMatchmakingStatus("idle");
  }
};

  const handelPlayBot = () => {
    console.log("Play Bots");
  }

  const handelPlayFriend = () => {
    console.log("play with friend");
  }

  const handelPlayCoach = () => {
    console.log("play with coach");
  }

  const handelPlayTurnaments = () => {
    console.log("play turnaments");
  }

  const handelChessVarients = () => {
    console.log("clicked on play varients");
  }



  const ACTION_CARDS = [
    { icon: Swords, title: "Play Online", subtitle: "Real players worldwide", tag: "1.e4", featured: true, to: "/play", onClick: handlePlayOnline },
    { icon: Bot, title: "Play Bots", subtitle: "Practice against AI", tag: "Nf3", featured: false, to: "/play" },
    { icon: UserPlus, title: "Play a Friend", subtitle: "Invite and challenge friends", tag: "O-O", featured: false, to: "/players" },
    { icon: Trophy, title: "Tournaments", subtitle: "Compete and climb rankings", tag: "Qxd8+", featured: false, to: "/tournaments" },
    { icon: Shuffle, title: "Chess Variants", subtitle: "Explore different game modes", tag: "0-0-0", featured: false, to: "/play" },
  ];



  return (
    <>
      {matchmakingStatus === "searching" && (
        <NormalLoader />
      )}
      {
        <Layout>
          <div className="flex flex-col lg:flex-row gap-5 items-start">
            <motion.div className="flex-1 min-w-0 flex flex-col gap-[18px]" initial="hidden" animate="show" variants={containerVariants}>
              <motion.div className="px-1" variants={fadeUp}>
                <span className="font-mono text-[11.5px] text-purple uppercase tracking-[0.12em] flex items-center gap-2 before:content-[''] before:w-[22px] before:h-px before:bg-gradient-to-r before:from-purple before:to-transparent">
                  Live position &middot; Giuoco Piano
                </span>
                <h1 className="font-display font-semibold leading-[1.08] mt-2 mb-1 text-[clamp(28px,3.4vw,40px)]">
                  Welcome Back, <span className="hero-title-accent">Grandmaster</span>
                </h1>
                <p className="text-dim text-[14.5px]">Ready for your next victory?</p>
              </motion.div>

              <motion.div className="flex flex-col gap-2.5 items-center" variants={fadeUp}>
                <PlayerStrip name="VolkovK_92" elo={2148} color="black" clock="08:42" top />
                <StaticBoard />
                <PlayerStrip name="Arjun Kade" elo={2156} color="white" clock="09:15" />
              </motion.div>
            </motion.div>

            <motion.div className="w-full lg:w-[360px] flex-shrink-0 flex flex-col gap-4" initial="hidden" animate="show" variants={containerVariants}>
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
      }
    </>
  );
}
