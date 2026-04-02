// components/layout/LeftPanel.jsx
import React from "react";
import PlayerCard from "./PlayerCard";
import ChessBoardWrapper from "./ChessBoardWrapper";

const LeftPanel = () => {
  return (
    <div className="w-full lg:flex-1 min-h-0 flex flex-col gap-3">
      {/* Opponent */}
      <PlayerCard name="Grandmaster_X" time="08:42" />

      {/* Chess Board */}
      <ChessBoardWrapper />

      {/* You */}
      <PlayerCard name="Kuldeep1110" time="10:00" isBottom />
    </div>
  );
};

export default LeftPanel;