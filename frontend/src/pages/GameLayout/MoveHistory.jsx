// components/game/MoveHistory.jsx
import React from "react";

const MoveHistory = () => {
  return (
    <div className="h-full bg-[#1c2541] p-4 rounded-xl flex flex-col">
      <h2 className="text-lg font-semibold mb-3">Move History</h2>

      <div className="text-sm text-gray-300 space-y-2 overflow-y-auto pr-1">
        <div>1. e4 e5</div>
        <div>2. Nf3 Nc6</div>
        <div>3. Bb5 a6</div>
      </div>
    </div>
  );
};

export default MoveHistory;