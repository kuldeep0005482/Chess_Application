import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
     ChevronRight
} from "lucide-react";

function ActionCard({ icon: Icon, title, subtitle, tag, featured, to, onClick }) {

    const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

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
          "glass flex min-w-0 flex-wrap items-center gap-[13px] p-3.5 rounded-2xl transition-all duration-200 hover:border-[rgba(139,92,246,0.4)] hover:bg-white/[0.065] " +
          (featured
            ? "bg-gradient-to-br from-[rgba(139,92,246,0.14)] to-[rgba(59,130,246,0.09)] border-[rgba(139,92,246,0.3)]"
            : "")
        }
      >
        <div className="w-[42px] h-[42px] flex-shrink-0 rounded-xl flex items-center justify-center text-[#d8d3ff] bg-gradient-to-br from-[rgba(139,92,246,0.25)] to-[rgba(59,130,246,0.2)]">
          <Icon size={22} strokeWidth={2} />
        </div>
        <div className="flex min-w-0 flex-col gap-0.5 flex-1">
          <span className="text-[14.5px] font-bold">{title}</span>
          <span className="text-xs text-dim">{subtitle}</span>
        </div>
        <span className="notation-tag flex-shrink-0">{tag}</span>
        <ChevronRight size={18} className="text-faint flex-shrink-0" />
      </Link>
    </motion.div>
  )
}

export default ActionCard