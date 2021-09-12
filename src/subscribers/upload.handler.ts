import BaseHandler from "./base.handler";

/**
 * UploadHandler - To manage upload events
 */

class UploadHandler extends BaseHandler {
	public subscribeEvents() {
		this.socket.on("start_upload_object", this.uploadObject);
	}

	private uploadObject(data: any, cb: Function) {
		/* eslint-disable-next-line no-console */
		console.log("[Socket event] - start_upload_object");
		cb({ success: true, status: 200, data: {} });
	}
}

export default UploadHandler;
