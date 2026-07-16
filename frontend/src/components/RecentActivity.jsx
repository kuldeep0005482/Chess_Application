import React from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp,
  TrendingDown,
} from "lucide-react";

function RecentActivity() {
    const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };
    const RECENT_GAMES = [
  { opponent: "VolkovK_92", result: "Win", delta: 8, time: "12m ago" },
  { opponent: "QuietBishop", result: "Loss", delta: -6, time: "1h ago" },
  { opponent: "EndgameEcho", result: "Win", delta: 11, time: "3h ago" },
];
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
    )
}

export default RecentActivity