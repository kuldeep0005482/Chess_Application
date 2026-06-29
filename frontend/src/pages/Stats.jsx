import { motion } from "framer-motion";
import { Gauge, Swords, Target, Flame, TrendingUp, TrendingDown } from "lucide-react";
import Layout from "../components/Layout.jsx";

const STATS = [
  { label: "Rating", value: "2,156", icon: Gauge },
  { label: "Games Played", value: "1,284", icon: Swords },
  { label: "Win Rate", value: "64%", icon: Target },
  { label: "Current Streak", value: "5 Wins", icon: Flame },
];

const HISTORY = [
  { opponent: "VolkovK_92", result: "Win", delta: 8, time: "12m ago" },
  { opponent: "QuietBishop", result: "Loss", delta: -6, time: "1h ago" },
  { opponent: "EndgameEcho", result: "Win", delta: 11, time: "3h ago" },
  { opponent: "RookRoulette", result: "Win", delta: 6, time: "Yesterday" },
  { opponent: "SilentKnight7", result: "Loss", delta: -9, time: "2 days ago" },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Stats() {
  return (
    <Layout>
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
        <div className="px-1 mb-6">
          <h1 className="font-display font-semibold text-[clamp(26px,3vw,34px)] mb-1">Stats</h1>
          <p className="text-dim text-[14.5px]">Your performance at a glance.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {STATS.map(({ label, value, icon: Icon }) => (
            <div key={label} className="glass flex flex-col gap-1.5 p-4">
              <Icon size={16} className="text-purple" />
              <span className="font-mono text-xl font-semibold">{value}</span>
              <span className="text-xs text-dim">{label}</span>
            </div>
          ))}
        </div>

        <div className="glass p-[18px]">
          <h3 className="font-display text-[15px] font-semibold mb-3.5">Game History</h3>
          <div className="flex flex-col gap-[9px]">
            {HISTORY.map((g, i) => (
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
        </div>
      </motion.div>
    </Layout>
  );
}
