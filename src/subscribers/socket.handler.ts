import BaseHandler from "./base.handler";

/**
 * SocketHandler - To manage socket connection events
 */

class SocketHandler extends BaseHandler {
	public subscribeEvents() {
		this.socket.on("disconnecting", this.socketDiconnecting);
		this.socket.on("disconnected", this.socketDisconnected);
	}

	private socketDiconnecting(reason: any) {
		/* eslint-disable-next-line no-console */
		console.log("[Socket disconnecting]", reason);
	}

	private socketDisconnected(reason: any) {
		/* eslint-disable-next-line no-console */
		console.log("[Socket disconnected]", reason);
	}
}

export default SocketHandler;
