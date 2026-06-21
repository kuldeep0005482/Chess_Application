// socket/game/roomService.js

import Game from "../../models/gameModel.js";

export const createRoom = async (player1, player2) => {

    const roomId = `room_${Date.now()}_${Math.floor(Math.random()*1000)}`;

    const whitePlayer =
        Math.random() > 0.5 ? player1.userId : player2.userId;

    const blackPlayer =
        whitePlayer === player1.userId
            ? player2.userId
            : player1.userId;

    const game = await Game.create({
        roomId,
        whitePlayer,
        blackPlayer,
        moves: []
    });

    return {
        roomId,
        gameId: game._id,
        whitePlayer,
        blackPlayer
    };
};