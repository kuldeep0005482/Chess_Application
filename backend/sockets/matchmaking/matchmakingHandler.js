import { findOpponent } from "./matchService.js";
import { addPlayer, removePlayerBySocketId } from "./matchmakingQueue.js";
import { createRoom } from "./roomServise.js";

const matchmakingHandler = (io, socket) => {

    socket.on("find-match", async (player) => {

        console.log("player searching", player);

        const currentPlayer = {
            ...player,
            rating: Number(player?.rating ?? 1200),
            socketId: socket.id,
        };

        removePlayerBySocketId(socket.id);

        const opponent = findOpponent(currentPlayer);

        if (opponent) {

            const opponentSocket = io.sockets.sockets.get(opponent.socketId);

            if (!opponentSocket) {
                removePlayerBySocketId(opponent.socketId);
                addPlayer(currentPlayer);

                socket.emit("searching", {
                    message: "Searching opponent..."
                });

                return;
            }

            removePlayerBySocketId(opponent.socketId);

            const room = await createRoom(
                { userId: currentPlayer.userId },
                { userId: opponent.userId }
            );

            // Join current player
            socket.join(room.roomId);

            // Join opponent
            opponentSocket?.join(room.roomId);

            // Notify both players
            io.to(room.roomId).emit("match-found", {
                roomId: room.roomId,
                gameId: room.gameId,
                whitePlayer: room.whitePlayer,
                blackPlayer: room.blackPlayer
            });

        } else {

            addPlayer(currentPlayer);

            socket.emit("searching", {
                message: "Searching opponent..."
            });
        }

    });

    socket.on("disconnect", () => {
        removePlayerBySocketId(socket.id);
    });

};

export default matchmakingHandler;