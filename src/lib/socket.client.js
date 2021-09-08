const { io } = require("socket.io-client");

const socket = io("http://localhost:3000");

socket.on("connect", () => {
	console.log("socket connected");
});

socket.io.on("reconnect_failed", () => {
	console.log("connetion failed");
});
