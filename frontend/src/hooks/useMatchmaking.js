import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import socket from "../socket/socket";
import { connectSocket } from "../socket/connectSocket";
import {
  findMatch,
  onSearching,
  onMatchFound,
  roomJoin,
  gameStart,
} from "../socket/matchMakingSocket";
import { SOCKET_EVENTS } from "../socket/events";

export default function useMatchmaking(userData, matchmakingStatus, setMatchmakingStatus) {
  const navigate = useNavigate();

  useEffect(() => {
    onSearching(() => setMatchmakingStatus("searching"));

    onMatchFound(() => {
      setMatchmakingStatus("matchFound");
    });

    roomJoin(() => {
      setMatchmakingStatus("joiningRoom");
    });

    gameStart(() => {
      setMatchmakingStatus("gameStarting");
      navigate("/play");
    });

    return () => {
      socket.off(SOCKET_EVENTS.SEARCHING);
      socket.off(SOCKET_EVENTS.MATCH_FOUND);
      socket.off(SOCKET_EVENTS.JOIN_ROOM);
      socket.off(SOCKET_EVENTS.GAME_START);
    };
  }, []);

  const playOnline = async () => {
    if (matchmakingStatus === "searching") return;

    try {
      if (!userData?.userId) throw new Error("User not logged in");

      setMatchmakingStatus("connecting");

      if (!socket.connected) {
        await connectSocket();
      }

      setMatchmakingStatus("searching");
      findMatch(userData);
    } catch (err) {
      console.error(err);
      setMatchmakingStatus("idle");
    }
  };

  return { playOnline };
}