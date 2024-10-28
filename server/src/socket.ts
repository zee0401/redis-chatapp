import { Server } from "socket.io";

export const socketConnect = (io: Server) => {
  io.on("connection", (socket) => {
    console.log("The Socket connected", socket.id);

    socket.on("message", (data) => {
      console.log("Server side message", data);
      socket.emit("chat", data);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
  });
};
