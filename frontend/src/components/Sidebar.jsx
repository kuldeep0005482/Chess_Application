import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";
import {
  Crown,
  Swords,
  Gauge,
  Trophy,
  UserPlus,
  TrendingUp,
  Play,
  Settings,
  LifeBuoy,
  X,
} from "lucide-react";
import Avatar from "./Avatar.jsx";

const NAV_ITEMS = [
  { label: "Play", to: "/play", icon: Swords },
  { label: "Lobby", to: "/lobby", icon: Gauge },
  { label: "Tournaments", to: "/tournaments", icon: Trophy },
  { label: "Players", to: "/players", icon: UserPlus },
  { label: "Stats", to: "/stats", icon: TrendingUp },
];

export default function Sidebar({ mobileOpen, onClose }) {

  const {userData} = useContext(AppContext);

  const navItemClass = (isActive) =>
    "flex items-center gap-[11px] px-3 py-2.5 rounded-[11px] text-[13.5px] font-medium relative transition-colors duration-150 " +
    (isActive
      ? "bg-gradient-to-br from-[rgba(139,92,246,0.18)] to-[rgba(59,130,246,0.14)] text-ink border border-[rgba(139,92,246,0.25)]"
      : "text-dim hover:bg-white/5 hover:text-ink border border-transparent");

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-[rgba(2,6,16,0.6)] backdrop-blur-[2px] z-[35] lg:hidden"
          onClick={onClose}
        />
      )}
      <aside
        className={
          "glass fixed top-4 left-4 h-[calc(100vh-32px)] w-[264px] flex flex-col p-[18px_16px] gap-[22px] z-40 transition-transform duration-300 ease-out " +
          (mobileOpen ? "translate-x-0" : "-translate-x-[120%] lg:translate-x-0")
        }
      >
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-[9px]">
            <div className="w-8 h-8 rounded-[9px] flex items-center justify-center text-white bg-gradient-to-br from-purple to-blue">
              <Crown size={20} strokeWidth={2.25} />
            </div>
            <span className="font-display text-[15px] font-semibold tracking-wide">
              CHESS<span className="logo-accent">ENGINE</span>
            </span>
          </NavLink>
          <button
            className="lg:hidden text-dim"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <NavLink to="/settings" className="glass-inset flex items-center gap-[11px] p-3">
          <Avatar initials={userData?.name.slice(0, 2)} ring />
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[13.5px] font-semibold">{userData?.name} </span>
            <span className="flex items-center gap-1 font-mono text-[11px] text-gold">
              <Gauge size={12} /> {userData?.rating}
            </span>
          </div>
        </NavLink>

        <nav className="flex flex-col gap-[3px]">
          {NAV_ITEMS.map(({ label, to, icon: Icon }) => (
            <NavLink key={label} to={to} className={({ isActive }) => navItemClass(isActive)}>
              {({ isActive }) => (
                <>
                  <Icon size={17} strokeWidth={2} />
                  <span>{label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-gradient-to-br from-purple to-blue" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/play" className="btn-primary mt-auto flex items-center justify-center gap-2 p-3 text-[13.5px]">
          <Play size={16} fill="currentColor" />
          Play Now
        </NavLink>

        <div className="flex flex-col gap-0.5">
          <NavLink to="/settings" className={({ isActive }) => navItemClass(isActive) + " text-[12.5px]"}>
            <Settings size={16} />
            <span>Settings</span>
          </NavLink>
          <NavLink to="/support" className={({ isActive }) => navItemClass(isActive) + " text-[12.5px]"}>
            <LifeBuoy size={16} />
            <span>Support</span>
          </NavLink>
        </div>
      </aside>
    </>
  );
}
