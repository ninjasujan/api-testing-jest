import { Socket } from "socket.io";

const shareFileHandler = (socket: Socket, io: any) => {
	socket.on("event_name", async (data, cb) => {
		//
	});
};

export default shareFileHandler;
