import { getPlayers } from "./matchmakingQueue.js";

export const findOpponent = (player) => {

    const players = getPlayers();
    const playerRating = Number(player.rating ?? 1200);

    return players.find(
        p =>
            p.userId !== player.userId &&
            Math.abs(Number(p.rating ?? 1200) - playerRating) <= 100
    );
};