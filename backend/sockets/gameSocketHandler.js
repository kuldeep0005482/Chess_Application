import { SOCKET_EVENTS } from "../constants/events.js";
import { rooms, playerRooms } from "./redis.js";
import SOCKET_EVENTS from "./events.js";

const gameSocketHandler = (io, socket) => {

// implimentation of MAKE_MOVE at server side

  // implimentation done and testing ramaining
  socket.on(SOCKET_EVENTS.MAKE_MOVE, (gameData) => {

    // Check room exists
    if (!rooms.has(gameData.roomId)) {
        socket.emit(SOCKET_EVENTS.ERROR_MESSAGE, {
            errorMessage: "Room does not exist"
        });
        return;
    }

    const room = rooms.get(gameData.roomId);

    // Check game status
    if (room.status !== "playing") {
        socket.emit(SOCKET_EVENTS.ERROR_MESSAGE, {
            errorMessage: "Game is not active"
        });
        return;
    }

    const chessBoard = room.chessBoard;

    // Optional turn validation
    if (chessBoard.turn() !== gameData.turn) {
        socket.emit(SOCKET_EVENTS.ERROR_MESSAGE, {
            errorMessage: "Not your turn"
        });
        return;
    }

    // Validate move
    const move = chessBoard.move({
        from: gameData.from,
        to: gameData.to,
        promotion: gameData.promotion || "q"
    });

    if (!move) {
        socket.emit(SOCKET_EVENTS.ERROR_MESSAGE, {
            errorMessage: "Illegal move"
        });
        return;
    }

    // Broadcast updated board
    io.to(gameData.roomId).emit(SOCKET_EVENTS.MOVE_MADE, {
        move,
        fen: chessBoard.fen(),
        turn: chessBoard.turn(),
        isCheck: chessBoard.inCheck(),
        isCheckmate: chessBoard.isCheckmate(),
        isDraw: chessBoard.isDraw(),
        isGameOver: chessBoard.isGameOver()
    });

});



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