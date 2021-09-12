import * as path from "path";
import * as dotenv from "dotenv";
import App from "./providers/App";
import Locals from "./providers/Locals";
dotenv.config({ path: path.join(__dirname, "../.env") });

/**
 * Connecting Database
 */

App.loadDatabase(Locals.config().mongoURI);

/**
 * Connecting server
 */
App.loadServer();
