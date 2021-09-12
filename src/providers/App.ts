import { Database } from "./Database";
import Express from "./Express";
import Socket from "./socket";

class App {
	/**
	 * Load server
	 */
	public loadServer(): void {
		Express.init();
		Socket.init(Express.getExpress());
	}

	/**
	 * Load Database
	 */
	public loadDatabase(mongoURI: string): void {
		Database.init(mongoURI);
	}
}

export default new App();
