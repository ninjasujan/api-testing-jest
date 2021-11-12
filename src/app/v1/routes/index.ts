import express, { Router } from 'express';

import authRoute from './auth.route';
import addressRoute from './address.route';

const route: Router = express.Router();

route.use('/auth', authRoute);
route.use('/address', addressRoute);

export default route;
