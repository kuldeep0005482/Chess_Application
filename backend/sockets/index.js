import matchMakingHandler from "./matchMakingHandler.js";
// import gameSocketHandler from "./gameSocketHandler";

const initializeSocket = (io) => {

    io.on("connection", (socket) => {

        console.log("User Connected:", socket.id);

  
         matchMakingHandler(io, socket);


        socket.on("disconnect", () => {
            console.log("User Disconnected:", socket.id);
        });

    });

};

export default initializeSocket;