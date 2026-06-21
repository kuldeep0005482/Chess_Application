import React, { useEffect, useState, useContext } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import {
  findMatch,
  setupMatchmakingListeners,
  removeMatchmakingListeners,
} from "../../socket/matchMakingSocket";
import { AppContext } from "../../context/AppContext";

import {
  Globe,
  Bot,
  GraduationCap,
  UserPlus,
  Trophy,
  Puzzle,
} from "lucide-react";

function RightPanel() {

  const { userData, isLoggedIn } = useContext(AppContext);
  const [matchStatus, setMatchStatus] = useState("");
  console.log("isLoggedIn:", isLoggedIn);
  console.log("userData:", userData?.userId);

  useEffect(() => {
    setupMatchmakingListeners({
      onSearching: () => setMatchStatus("Searching for an opponent..."),
      onMatchFound: () => setMatchStatus("Match found. Starting game..."),
    });

    return () => {
      removeMatchmakingListeners();
    };
  }, []);

  const handelPlayOnline = () => {
    console.log("Play Online");
    findMatch(userData);
  }

  const handelPlayBot = () => {
    console.log("Play Bots");
  }

  const handelPlayFriend = () => {
    console.log("play with friend");
  }

  const handelPlayCoach = () => {
    console.log("play with coach");
  }

  const handelPlayTurnaments = () => {
    console.log("play turnaments");
  }

  const handelChessVarients = () => {
    console.log("clicked on play varients");
  }

  const menuItems = [
    {
      icon: <Globe />,
      title: "Play Online",
      subtitle: "Real players worldwide",
      fullWidth: true,
      onClick: handelPlayOnline,
    },
    {
      icon: <Bot />,
      title: "Play Bots",
      subtitle: "Practice vs AI",
      onClick: handelPlayBot,
    },
    {
      icon: <GraduationCap />,
      title: "Play Coach",
      subtitle: "Guided learning",
      onClick: handelPlayCoach,
    },
    {
      icon: <UserPlus />,
      title: "Play a Friend",
      subtitle: "Invite via link",
      onClick: handelPlayFriend,
    },
    {
      icon: <Trophy />,
      title: "Tournaments",
      subtitle: "Compete & rank",
      onClick: handelPlayTurnaments,
    },
    {
      icon: <Puzzle />,
      title: "Chess Variants",
      subtitle: "960, Fog of War, & more",
      fullWidth: true,
      onClick: handelChessVarients,
    },
  ];

  return (
    <div className="w-full lg:w-[360px] xl:w-[400px] min-h-0 bg-[#0d1b2a] p-4 rounded-xl overflow-y-auto">
      <div className="space-y-4">
        {menuItems.map((item) => (
          <MenuCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            subtitle={item.subtitle}
            fullWidth={item.fullWidth}
            onClick={item.onClick}
          />
        ))}
        {matchStatus ? (
          <div className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
            {matchStatus}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default RightPanel;