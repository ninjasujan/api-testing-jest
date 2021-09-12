import { Server, Socket } from "socket.io";
import { Server as app } from "http";
import UploadHandler from "../subscribers/upload.handler";
import SocketHandler from "../subscribers/socket.handler";

/**
 * Initialization socket and attaching events
 */

class SocketIO {
	public static io: any;

	public static socket: Socket;

	public static init(server: app) {
		SocketIO.io = new Server(server);
		SocketIO.io.use(this.socketMiddleware);
		SocketIO.io.on("connection", SocketIO.socketConnection);
	}

	public static socketMiddleware(socket: Socket, next: any) {
		/* eslint-disable-next-line no-console */
		console.log("[Socket middleware]", socket.id);
		next();
	}

	public static socketConnection(socket: Socket) {
		/* eslint-disable-next-line no-console */
		console.log("[Socket connected]");
		SocketIO.socket = socket;

		/**
		 * subscribe to socket events
		 */
		const uploadEvent = new UploadHandler(SocketIO.socket, SocketIO.io);
		uploadEvent.subscribeEvents();

		const socketEvent = new SocketHandler(SocketIO.socket, SocketIO.io);
		socketEvent.subscribeEvents();
	}
}

export default SocketIO;
