import swaggerUi from 'swagger-ui-express';
import express, { Application } from 'express';
import cors from 'cors';
import compress from 'compression';
import morgan from 'morgan';
import expressJwt from 'express-jwt';
import hemlet from 'helmet';
import apiDocs from '../app/docs/index';
import Locals from '../providers/Locals';

class Http {
    public static mount(_express: Application): Application {
        _express.disable('x-powered-by');
        _express.use(cors());
        _express.use(hemlet());
        _express.use(compress());
        _express.use(express.json());
        _express.use('/api/docs', swaggerUi.serve, swaggerUi.setup(apiDocs));
        _express.use(express.urlencoded({ extended: true }));
        _express.use(
            expressJwt({
                secret: Locals.config().apiSecret,
                algorithms: ['HS256'],
            }).unless({
                path: [{ url: '/api/v1/auth/login', method: ['POST'] }],
            }),
        );

        if (Locals.config().environment === 'dev') {
            _express.use(morgan('dev'));
        }
        if (Locals.config().environment === 'prod') {
            /* eslint-disable-next-line no-console */
            console.log = () => {};
        }
        return _express;
    }
}

export default Http;
