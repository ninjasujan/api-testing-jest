import BaseHandler from "./base.handler";

/**
 * SocketHandler - To manage socket connection events
 */

class SocketHandler extends BaseHandler {
	public subscribeEvents() {
		this.socket.on("disconnecting", this.socketDiconnecting);
		this.socket.on("disconnected", this.socketDisconnected);
	}

	private socketDiconnecting() {
		// do some operation
	}

	private socketDisconnected() {
		// do some operation
	}
}

export default SocketHandler;
