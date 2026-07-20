import React, { useState } from "react";
import { Crown, LayoutGrid, Users } from "lucide-react";
// this is tabs object 
const tabs = [
  {
    id: "new-game",
    title: "New Game",
    icon: Crown,
  },
  {
    id: "games",
    title: "Games",
    icon: LayoutGrid,
  },
  {
    id: "players",
    title: "Players",
    icon: Users,
  },
];

export default function TabBar({activeTab, setActiveTab}) {
  

  return (
    <div className="flex overflow-hidden rounded-2xl border border-[#2B3653] ">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const active = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex flex-1 flex-col items-center justify-center gap-2 py-4 transition-all duration-300 ${
              active
                ? "bg-gradient-to-b from-[#1C2644] to-[#19223D]"
                : "text-slate-400 hover:bg-[#151F39] hover:text-white"
            }`}
          >
            {/* Icon */}
            <div
              className={`rounded-xl p-2.5 transition-all duration-300 ${
                active
                  ? "bg-gradient-to-b from-[#7B6EFF] to-[#6153F5] text-white shadow-lg shadow-indigo-500/30"
                  : "text-slate-400"
              }`}
            >
              <Icon size={22} strokeWidth={2} />
            </div>

            {/* Title */}
            <span
              className={`text-sm font-medium ${
                active ? "text-white" : "text-slate-400"
              }`}
            >
              {tab.title}
            </span>

            {/* Bottom Border */}
            {active && (
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#6D5CFF]" />
            )}
          </button>
        );
      })}
    </div>
  );
}