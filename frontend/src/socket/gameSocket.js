import socket from "./socket";
import { SOCKET_EVENTS } from "./events";

export const makeMove = (
  roomId,
  move
) => {

  socket.emit(
    SOCKET_EVENTS.MAKE_MOVE,
    {
      roomId,
      move,
    }
  );

};

export const onMoveMade = (
  callback
) => {

  socket.on(
    SOCKET_EVENTS.MOVE_MADE,
    callback
  );

};

export const resignGame = (
  roomId,
  playerId
) => {

  socket.emit(
    SOCKET_EVENTS.RESIGN,
    {
      roomId,
      playerId,
    }
  );

};

export const onGameOver = (
  callback
) => {

  socket.on(
    SOCKET_EVENTS.GAME_OVER,
    callback
  );

};