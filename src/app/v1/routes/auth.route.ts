import express, { Router } from 'express';
import { body, query, param } from 'express-validator';
import {
    latitudeError,
    latitudeRange,
    longitudeError,
    longitudeRange,
} from '../../../constants/user.constants';

import authController from '../controller/auth.controller';

const router: Router = express.Router();

router.post(
    '/login',
    body('email', 'invalid email').isEmail(),
    body('mobile', 'mobile number must be min 10 digit number')
        .isNumeric()
        .isLength({ min: 10, max: 14 }),
    body('name', 'invalid name').isString(),
    body('latitude', latitudeError).isFloat(latitudeRange),
    body('longitude', longitudeError).notEmpty().isFloat(longitudeRange),
    authController.login,
);

router.put(
    '/update-user',
    body('name', 'invalid name').isString(),
    body('mobile').isNumeric().isLength({ min: 10, max: 14 }),
    authController.updateUser,
);

router.get(
    '/user',
    query('mobile', 'invalid mobile number').notEmpty(),
    authController.getUser,
);

router.get(
    '/user/:name',
    param('name', 'Invalid name in parameter'),
    authController.getUserByName,
);

export default router;
