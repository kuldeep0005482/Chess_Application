import { motion } from "framer-motion";
import { LifeBuoy, MessageSquare, BookOpen, Mail } from "lucide-react";
import Layout from "../components/Layout.jsx";

const fadeUp = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } };

const OPTIONS = [
  { icon: BookOpen, title: "Help Center", subtitle: "Guides on rules, ratings and fair play" },
  { icon: MessageSquare, title: "Live Chat", subtitle: "Talk with support, usually replies in minutes" },
  { icon: Mail, title: "Email Us", subtitle: "support@chessengine.app" },
];

export default function Support() {
  return (
    <Layout>
      <motion.div initial="hidden" animate="show" variants={fadeUp} className="max-w-2xl">
        <div className="px-1 mb-6 flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[#d8d3ff] bg-gradient-to-br from-[rgba(139,92,246,0.25)] to-[rgba(59,130,246,0.2)]">
            <LifeBuoy size={22} />
          </div>
          <div>
            <h1 className="font-display font-semibold text-[clamp(24px,2.8vw,30px)]">Support</h1>
            <p className="text-dim text-[14px]">We're here to help.</p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {OPTIONS.map(({ icon: Icon, title, subtitle }) => (
            <button key={title} className="glass flex items-center gap-3.5 p-4 text-left hover:border-[rgba(139,92,246,0.4)] transition-colors">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-[#d8d3ff] bg-gradient-to-br from-[rgba(139,92,246,0.25)] to-[rgba(59,130,246,0.2)] flex-shrink-0">
                <Icon size={18} />
              </div>
              <div>
                <p className="text-[14px] font-semibold">{title}</p>
                <p className="text-xs text-dim">{subtitle}</p>
              </div>
            </button>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}
