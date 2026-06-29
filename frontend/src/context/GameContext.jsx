import { createContext, useContext, useEffect, useState } from "react";

import {
  onMatchFound,
  removeMatchFoundListener,
} from "../socket/matchMakingSocket";

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  // Matchmaking
  const [matchmakingStatus, setMatchmakingStatus] = useState("idle");

  // Current Game
  const [currentGame, setCurrentGame] = useState(null);

  // Room
  const [roomId, setRoomId] = useState(null);

  // Opponent
  const [opponent, setOpponent] = useState(null);

  // Chess Board State
  const [gameState, setGameState] = useState(null);

  useEffect(() => {
    const handleMatchFound = (gameData) => {
      console.log("Match Found", gameData);

      setMatchmakingStatus("matchFound");

      setCurrentGame(gameData);

      setRoomId(gameData.roomId);

      const opponentData =
        gameData.whitePlayer?._id === gameData.currentPlayerId
          ? gameData.blackPlayer
          : gameData.whitePlayer;

      setOpponent(opponentData);
    };

    onMatchFound(handleMatchFound);

    return () => {
      removeMatchFoundListener(handleMatchFound);
    };
  }, []);

  const value = {
    // Matchmaking
    matchmakingStatus,
    setMatchmakingStatus,

    // Game
    currentGame,
    setCurrentGame,

    roomId,
    setRoomId,

    opponent,
    setOpponent,

    gameState,
    setGameState,
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => useContext(GameContext);