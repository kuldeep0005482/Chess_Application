import { motion } from "framer-motion";
import { Search, UserPlus, Gauge } from "lucide-react";
import Layout from "../components/Layout.jsx";
import Avatar from "../components/Avatar.jsx";

const PLAYERS = [
  { name: "VolkovK_92", elo: 2148, status: "Online" },
  { name: "QuietBishop", elo: 1986, status: "Offline" },
  { name: "EndgameEcho", elo: 2210, status: "In Game" },
  { name: "RookRoulette", elo: 1742, status: "Online" },
  { name: "SilentKnight7", elo: 2034, status: "Offline" },
  { name: "PawnStorm", elo: 1899, status: "Online" },
];

const statusColor = {
  Online: "text-win",
  Offline: "text-faint",
  "In Game": "text-gold",
};

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Players() {
  return (
    <Layout>
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-3xl">
        <div className="px-1 mb-6 flex items-center justify-between flex-wrap gap-3">
          <div>
            <h1 className="font-display font-semibold text-[clamp(26px,3vw,34px)] mb-1">Players</h1>
            <p className="text-dim text-[14.5px]">Find friends and rivals.</p>
          </div>
          <div className="relative">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-faint" />
            <input className="input-field pl-9 w-56" placeholder="Search players..." />
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {PLAYERS.map((p) => (
            <div key={p.name} className="glass flex items-center gap-3.5 p-3.5">
              <Avatar initials={p.name.slice(0, 2).toUpperCase()} />
              <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                <span className="text-[14px] font-semibold">{p.name}</span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-faint">
                  <Gauge size={11} /> {p.elo} ELO
                </span>
              </div>
              <span className={"text-xs font-medium " + statusColor[p.status]}>{p.status}</span>
              <button className="btn-primary px-4 py-2 text-[13px] flex items-center gap-1.5">
                <UserPlus size={14} /> Add
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}
