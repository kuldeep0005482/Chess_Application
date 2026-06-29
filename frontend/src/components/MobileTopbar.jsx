import { Crown, Menu } from "lucide-react";

export default function MobileTopbar({ onOpen }) {
  return (
    <div className="lg:hidden flex items-center justify-between fixed top-0 left-0 right-0 h-[60px] px-4 z-30 bg-[rgba(6,18,41,0.85)] border-b border-border backdrop-blur-[14px]">
      <div className="flex items-center gap-[9px]">
        <div className="w-[30px] h-[30px] rounded-[9px] flex items-center justify-center text-white bg-gradient-to-br from-purple to-blue">
          <Crown size={18} />
        </div>
        <span className="font-display text-[15px] font-semibold tracking-wide">
          CHESS<span className="logo-accent">ENGINE</span>
        </span>
      </div>
      <button onClick={onOpen} aria-label="Open menu" className="text-ink bg-transparent border-none">
        <Menu size={22} />
      </button>
    </div>
  );
}
