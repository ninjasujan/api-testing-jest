import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import Locals from '../../../providers/Locals';
import ValidatioError from '../../../exceptions/ValidationError';
import UserModel from '../../../models/user.model';
import APIError from '../../../exceptions/APIError';

class AuthController {
    public login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, mobile, name, latitude, longitude } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw new ValidatioError(errors);
            }
            let user = await UserModel.findOne({ email });

            if (!user) {
                user = await new UserModel({
                    email,
                    mobile,
                    name,
                    location: {
                        type: 'point',
                        coordinates: [latitude, longitude],
                    },
                }).save();
            }

            const token = jwt.sign(
                {
                    _id: user._id,
                },
                Locals.config().apiSecret,
            );

            res.status(200).json({
                status: 'success',
                message: 'User logged In',
                token: token,
                user: user,
            });
        } catch (error) {
            next(error);
        }
    };

    public updateUser = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ) => {
        try {
            const { mobile, name } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw new ValidatioError(errors);
            }
            const userId = req.user._id;
            const user = await UserModel.findById(userId);
            if (!user) {
                throw new APIError('user not found for given id', 400);
            }
            let update: { [key: string]: string } = {};
            if (mobile) {
                update['mobile'] = mobile;
            }
            if (name) {
                update['name'] = name;
            }
            if (!Object.values(update)) {
                throw new APIError('no valid user field to update', 400);
            }
            await UserModel.findByIdAndUpdate(userId, update);
        } catch (error) {
            next(error);
        }
    };
}

export default new AuthController();
