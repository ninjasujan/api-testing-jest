import { Application } from 'express';
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.join(__dirname, '../../.env') });

class Locals {
    /**
     * Make env available throughout your application runtime
     */
    public static config(): any {
        const environment = process.env.ENVIRONMENT || 'dev';
        const port = process.env.PORT || 4000;
        const mongoURI = process.env.MONGO_URI;
        const apiSecret =
            process.env.TOKEN_SECRET || 'This is your responsibility!';
        return {
            environment,
            port,
            mongoURI,
            apiSecret,
        };
    }

    public static init(_express: Application): Application {
        return _express;
    }
}

export default Locals;
