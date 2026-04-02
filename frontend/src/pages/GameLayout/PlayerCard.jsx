// components/game/PlayerCard.jsx
import React from "react";

const PlayerCard = ({ name, time, isBottom }) => {
  return (
    <div className="flex items-center justify-between bg-[#1c2541] px-4 py-2 rounded-lg">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-gray-500 rounded-md" />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-400">India</p>
        </div>
      </div>

      <div className="bg-[#0b132b] px-3 py-1 rounded-md text-sm">
        {time}
      </div>
    </div>
  );
};

export default PlayerCard;