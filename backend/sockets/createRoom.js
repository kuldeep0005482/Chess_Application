import {rooms, playerRooms} from "./redis.js";
import { SOCKET_EVENTS } from "./events.js";
import { Chess } from "chess.js";


const createRoom = (io, player1, player2)=>{
     const roomId = randomUUID();

    const white =
        Math.random() > 0.5 ? player1 : player2;

    const black =
        white.userId === player1.userId
            ? player2
            : player1;

    const room = {

        roomId,
        chessBoard: new Chess(),

        white: {
            userId: white.userId,
            socketId: white.socketId,
            rating: white.rating,
        },

        black: {
            userId: black.userId,
            socketId: black.socketId,
            rating: black.rating,
        },

        status: "playing",

        moves: [],
        turn: white,

        createdAt: Date.now(),
    };

    rooms.set(roomId, room);

    playerRooms.set(white.userId, roomId);
    playerRooms.set(black.userId, roomId);

    io.sockets.sockets.get(white.socketId)?.join(roomId);
    io.sockets.sockets.get(black.socketId)?.join(roomId);

    player1.emit("join-room", {
        roomId : roomId,
        message: "join - room socket call",
        success: true,
    })

    // io.to(roomId).emit("match-found", {

    //     roomId,

    //     whitePlayer: room.white.userId,

    //     blackPlayer: room.black.userId,
    // });

    console.log("Room Created :", roomId);

    return room;
}

export default createRoom;