import uploadFileHandler from "./upload.handler";
import shareFileHandler from "./share.handler";
import { Socket } from "socket.io";

const attachSocketEvent = (socket: Socket, io: any) => {
	uploadFileHandler(socket, io);
	shareFileHandler(socket, io);
};

export default attachSocketEvent;
