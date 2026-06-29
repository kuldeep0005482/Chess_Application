import { motion } from "framer-motion";
import { Trophy, Users, Calendar } from "lucide-react";
import Layout from "../components/Layout.jsx";

const TOURNAMENTS = [
  { name: "Winter Blitz Open", players: 128, date: "Jun 28", prize: "Title + 500 ELO badge", status: "Open" },
  { name: "ChessEngine Masters", players: 64, date: "Jul 4", prize: "$500 pool", status: "Open" },
  { name: "Weekend Rapid Cup", players: 256, date: "Jul 12", prize: "Trophy + Title", status: "Filling" },
  { name: "Giuoco Piano Classic", players: 32, date: "Jul 19", prize: "Featured Game", status: "Closed" },
];

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

export default function Tournaments() {
  return (
    <Layout>
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-4xl">
        <div className="px-1 mb-6">
          <h1 className="font-display font-semibold text-[clamp(26px,3vw,34px)] mb-1">Tournaments</h1>
          <p className="text-dim text-[14.5px]">Compete and climb the rankings.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3.5">
          {TOURNAMENTS.map((t) => (
            <div key={t.name} className="glass p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#d8d3ff] bg-gradient-to-br from-[rgba(139,92,246,0.25)] to-[rgba(59,130,246,0.2)]">
                  <Trophy size={19} />
                </div>
                <span
                  className={
                    "notation-tag " +
                    (t.status === "Open" ? "text-win" : t.status === "Closed" ? "text-loss" : "text-gold")
                  }
                >
                  {t.status}
                </span>
              </div>
              <div>
                <h3 className="text-[15px] font-bold mb-0.5">{t.name}</h3>
                <p className="text-xs text-dim">{t.prize}</p>
              </div>
              <div className="flex items-center gap-4 text-xs text-faint">
                <span className="flex items-center gap-1.5"><Users size={13} /> {t.players} players</span>
                <span className="flex items-center gap-1.5"><Calendar size={13} /> {t.date}</span>
              </div>
              <button className="btn-primary py-2.5 text-[13px]" disabled={t.status === "Closed"}>
                {t.status === "Closed" ? "Registration Closed" : "Register"}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}
