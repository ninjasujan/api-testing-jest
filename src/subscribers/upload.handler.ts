import BaseHandler from "./base.handler";

/**
 * UploadHandler - To manage upload events
 */

class UploadHandler extends BaseHandler {
	public subscribeEvents() {
		this.socket.on("start_upload_object", this.uploadObject);
	}

	private uploadObject() {
		// do some operation
	}
}

export default UploadHandler;
