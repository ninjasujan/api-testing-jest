import http from "http";

import app from "./app";
import socket from "./socket";

const server = http.createServer(app);

// socket connections
socket(server);

server.listen(process.env.PORT, () => {
	console.log("[Express server] running");
});

server.on("error", (error) => {
	console.log("[Express server] error", error);
});
