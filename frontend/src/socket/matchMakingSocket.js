import socket from "./socket";

export const setupMatchmakingListeners = ({
    onSearching,
    onMatchFound,
}) => {

    socket.off("searching");
    socket.off("match-found");

    socket.on("searching", (data) => {
        console.log("Searching:", data);

        if (onSearching) {
            onSearching(data);
        }
    });

    socket.on("match-found", (data) => {
        console.log("Match Found:", data);

        if (onMatchFound) {
            onMatchFound(data);
        }
    });
};

export const findMatch = (userData) => {
    if (!userData) {
        return;
    }

    socket.emit("find-match", {
        userId: userData.userId ?? userData._id,
        rating: userData.rating ?? 1200,
    });

};

export const removeMatchmakingListeners = () => {

    socket.off("searching");
    socket.off("match-found");

};