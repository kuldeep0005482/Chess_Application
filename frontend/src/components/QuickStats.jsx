import React from 'react';
import { motion } from 'framer-motion';
import {
    Gauge,
    Swords,
    Target,
    Flame
} from "lucide-react";

function QuickStats() {

    const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

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
  )
}

export default QuickStats