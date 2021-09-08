import { Socket } from "socket.io";

const uploadFileHandler = (socket: Socket, io: any) => {
	socket.on("event_name", async (data, cb) => {
		//
	});
};

export default uploadFileHandler;
