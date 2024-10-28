import { Server } from "socket.io";

export const socketConnect = (io: Server) => {
  io.on("connection", (socket) => {
    console.log("Socket connected", socket.id);
    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
  });
};
