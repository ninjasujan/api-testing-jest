import http from "http";
import config from "./config";
import app from "./app";
import socket from "./socket";

const server = http.createServer(app);

// socket connections
socket(server);

server.listen(config.PORT, () => {
	console.log("server running.");
});

server.on("error", () => {
	console.log("server error.");
});
