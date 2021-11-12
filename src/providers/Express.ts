import http, { Server } from 'http';
import express, { Application, Request, Response } from 'express';
import route from '../app/main.route';
import ExceptionHandler from '../exceptions/Handler';
import httpMiddleware from '../middleware/http.middleware';
import Locals from './Locals';

class Express {
    /**
     * Create express object
     */
    public express: Application;

    public server: Server;

    /**
     * Initialize the express server
     */
    constructor() {
        this.express = express();
        this.mountMiddlewware();
        this.mountRoute();
        this.server = http.createServer(this.express);
    }

    private mountMiddlewware(): void {
        httpMiddleware.mount(this.express);
    }

    public mountRoute(): void {
        this.express.use('/api', route);
        this.express.use((req: Request, res: Response) => {
            res.status(404).json({
                status: 'error',
                message: 'Route not found',
            });
        });
        this.express.use(ExceptionHandler.errorHandler);
    }

    public getExpress(): Application {
        return this.express;
    }

    public getServer(): Server {
        return this.server;
    }

    public init(): void {
        const { port } = Locals.config();
        this.server.listen(port, () => {
            /* eslint-disable-next-line no-console */
            console.log(
                '\x1b[33m%s\x1b[0m',
                `[Server running on port ${port}]`,
            );
        });
    }
}

export default new Express();
