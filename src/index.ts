import App from './providers/App';
import Locals from './providers/Locals';

/**
 * Connecting Database
 */

App.loadDatabase(Locals.config().mongoURI);

/**
 * Connecting server
 */
App.loadServer();
