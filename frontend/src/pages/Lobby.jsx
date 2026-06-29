import { motion } from "framer-motion";
import { Gauge, Clock, Swords } from "lucide-react";
import Layout from "../components/Layout.jsx";
import Avatar from "../components/Avatar.jsx";

const SEATS = [
  { name: "VolkovK_92", elo: 2148, time: "10 | 0", mode: "Rapid" },
  { name: "QuietBishop", elo: 1986, time: "3 | 2", mode: "Blitz" },
  { name: "EndgameEcho", elo: 2210, time: "15 | 10", mode: "Rapid" },
  { name: "RookRoulette", elo: 1742, time: "1 | 0", mode: "Bullet" },
  { name: "SilentKnight7", elo: 2034, time: "5 | 3", mode: "Blitz" },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Lobby() {
  return (
    <Layout>
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
        <div className="px-1 mb-6">
          <h1 className="font-display font-semibold text-[clamp(26px,3vw,34px)] mb-1">Lobby</h1>
          <p className="text-dim text-[14.5px]">Open seats waiting for a challenger.</p>
        </div>

        <div className="flex flex-col gap-2.5">
          {SEATS.map((seat) => (
            <div key={seat.name} className="glass flex items-center gap-3.5 p-3.5">
              <Avatar initials={seat.name.slice(0, 2).toUpperCase()} />
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span className="text-[14px] font-semibold">{seat.name}</span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-faint">
                  <Gauge size={11} /> {seat.elo} ELO
                </span>
              </div>
              <span className="notation-tag flex items-center gap-1">
                <Clock size={11} /> {seat.time}
              </span>
              <span className="hidden sm:inline-flex notation-tag">{seat.mode}</span>
              <button className="btn-primary px-4 py-2 text-[13px] flex items-center gap-1.5">
                <Swords size={14} /> Join
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}
