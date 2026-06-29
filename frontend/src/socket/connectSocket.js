import socket from "./socket"

export const connectSocket = ()=>{
    socket.connect();

    return ()=>{
        socket.disconnect();
    }
}