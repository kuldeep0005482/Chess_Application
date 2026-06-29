import { Clock } from "lucide-react";
import Avatar from "./Avatar.jsx";

export default function PlayerStrip({ name, elo, color, clock, top }) {
  return (
    <div
      className={
        "glass-inset flex items-center gap-[11px] px-3.5 py-2.5 max-w-[440px] w-full mx-auto" +
        (top ? " mb-0.5" : "")
      }
    >
      <Avatar initials={name.slice(0, 2).toUpperCase()} />
      <div className="flex flex-col gap-0.5 flex-1 min-w-0">
        <span className="flex items-center gap-[7px] text-[13px] font-semibold">
          {name}
          <span
            className={
              "w-2 h-2 rounded-full border border-white/30 " +
              (color === "white" ? "bg-[#f3f1ff]" : "bg-[#0a1024]")
            }
          />
        </span>
        <span className="font-mono text-[11px] text-faint">{elo} ELO</span>
      </div>
      <div className="flex items-center gap-[5px] font-mono text-[13px] text-gold px-2.5 py-1.5 rounded-lg bg-[rgba(212,175,106,0.08)]">
        <Clock size={13} />
        {clock}
      </div>
    </div>
  );
}
