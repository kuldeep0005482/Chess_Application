import { SOCKET_EVENTS } from "./events.js";

const waitingPlayers = [];

const matchmakingHandler = (io, socket) => {

  socket.on(SOCKET_EVENTS.FIND_MATCH, (player) => {

    socket.emit(SOCKET_EVENTS.SEARCHING, {
      message: "Searching opponent..."
    });

    if (waitingPlayers.length > 0) {

      const opponent = waitingPlayers.shift();

      const roomId = `room_${Date.now()}`;

      socket.join(roomId);
      opponent.socket.join(roomId);

      const gameData = {
        roomId,
        white: opponent.player,
        black: player,
      };

      io.to(roomId).emit(
        SOCKET_EVENTS.MATCH_FOUND,
        gameData
      );

    } else {

      waitingPlayers.push({
        socket,
        player,
      });

    }
  });

};

export default matchmakingHandler;