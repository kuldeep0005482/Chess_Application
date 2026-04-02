// components/layout/GameLayout.jsx
import React from "react";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const GameLayout = () => {
  return (
    <div className="w-full h-full bg-[#0b132b] text-white flex flex-col lg:flex-row gap-3 lg:gap-4 p-3 lg:p-4 mx-auto overflow-hidden">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default GameLayout;