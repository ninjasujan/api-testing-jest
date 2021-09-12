import { Socket, Server } from "socket.io";

/**
 * Base class for managing the socket instances.
 */

export default class BaseHandler {
	protected socket: Socket;

	protected io: Server;

	constructor(socket: Socket, io: any) {
		this.socket = socket;
		this.io = io;
	}
}
