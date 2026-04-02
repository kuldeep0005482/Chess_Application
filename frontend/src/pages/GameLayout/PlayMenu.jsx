// components/game/PlayMenu.jsx
import React from "react";

const PlayMenu = () => {
  return (
    <div className="bg-[#1c2541] p-4 rounded-xl">
      <h2 className="text-lg font-semibold mb-4">Play Chess</h2>

      <div className="flex flex-col gap-3">
        <button className="bg-[#3a506b] p-3 rounded-lg text-left">
          Play Online
        </button>
        <button className="bg-[#3a506b] p-3 rounded-lg text-left">
          Play Bots
        </button>
        <button className="bg-[#3a506b] p-3 rounded-lg text-left">
          Play a Friend
        </button>
      </div>
    </div>
  );
};

export default PlayMenu;