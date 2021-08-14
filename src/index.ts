import http from "http";
import { Server } from "socket.io";
import config from "./config";
import app from "./app";

const createServer = async () => {
  const server = http.createServer(app);

  const io = new Server(server, {
    maxHttpBufferSize: 7e6,
  });

  io.on("connection", (socket) => {
    console.log("SOCKET CONNECTED.");
  });

  server.listen(config.PORT, () => {
    console.log("SERVER RUNNING.");
  });

  server.on("error", () => {
    console.log("SERVER ERROR.");
  });
};

createServer();
