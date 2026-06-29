import socket from "./socket";
import { SOCKET_EVENTS } from "./events";

export const findMatch = (userData) => {

  socket.emit(
    SOCKET_EVENTS.FIND_MATCH,
    userData
  );

};

export const onSearching = (callback) => {

  socket.on(
    SOCKET_EVENTS.SEARCHING,
    callback
  );

};

export const onMatchFound = (callback) => {

  socket.on(
    SOCKET_EVENTS.MATCH_FOUND,
    callback
  );

};

export const removeMatchFoundListener = (callback) => {

  socket.off(
    SOCKET_EVENTS.MATCH_FOUND,
    callback
  );

};