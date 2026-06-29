import { SOCKET_EVENTS } from "../constants/events.js";

const gameSocketHandler = (io, socket) => {

  socket.on(
    SOCKET_EVENTS.MAKE_MOVE,
    ({ roomId, move }) => {

      socket.to(roomId).emit(
        SOCKET_EVENTS.MOVE_MADE,
        move
      );

    }
  );

  socket.on(
    SOCKET_EVENTS.RESIGN,
    ({ roomId, playerId }) => {

      io.to(roomId).emit(
        SOCKET_EVENTS.GAME_OVER,
        {
          winner: "opponent",
          reason: "resignation",
          playerId,
        }
      );

    }
  );

};

export default gameSocketHandler;