import { Server, Socket } from "socket.io";

interface CustomeRoom extends Socket {
  room?: string;
}

export const socketConnect = (io: Server) => {
  //middleware
  io.use((socket: CustomeRoom, next) => {
    const room = socket.handshake.auth.room || socket.handshake.headers.room;

    if (!room) {
      return next(new Error("Room not found"));
    }

    socket.room = room;

    next();
  });

  io.on("connection", (socket: CustomeRoom) => {
    socket.join(socket.room);

    socket.on("message", (data) => {
      console.log("Server side message", data);
      socket.emit("chat", data);
      io.to(socket.room).emit("chat", data);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });
  });
};
