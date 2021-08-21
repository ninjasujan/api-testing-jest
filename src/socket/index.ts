import { Server, Socket } from "socket.io";
import { Server as app } from "http";
import { ioMiddleware, socketError, socketMiddleware } from "./middleware";

const initializeSocket = async (server: app) => {
  // socket instance
  const io = new Server(server);

  // io middleware
  io.use(ioMiddleware);

  // socket connection
  io.on("connection", (socket: Socket) => {
    console.log("socket connected");

    socket.use(socketMiddleware);

    socket.on("disconnected", () => {
      console.log("socket disconnected");
    });
  });
};

export default initializeSocket;
