import matchmakingHandler from "./matchmaking/matchmakingHandler.js";
// import gameSocketHandler from "./gameSocketHandler";

const initializeSocket = (io) => {

    io.on("connection", (socket) => {

        console.log("User Connected:", socket.id);

        // Register socket handlers
         matchmakingHandler(io, socket);
        //  gameSocketHandler(io, socket);

        socket.on("disconnect", () => {
            console.log("User Disconnected:", socket.id);
        });

    });

};

export default initializeSocket;