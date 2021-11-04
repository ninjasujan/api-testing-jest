import { UnauthorizedError } from 'express-jwt';
import { NextFunction, Request, Response } from 'express';
import APIError from './APIError';
import ValidatioError from './ValidationError';

class Handler {
    public static errorHandler(
        /* eslint-disable no-unused-vars */
        error: APIError | ValidatioError | UnauthorizedError,
        req: Request,
        res: Response,

        next: NextFunction,
    ): any {
        if (error instanceof APIError) {
            res.status(error.status).json({
                success: 'error',
                errorType: 'APIError',
                message: error.message,
            });
        } else if (error instanceof ValidatioError) {
            res.status(error.status).json({
                success: 'error',
                errorType: 'ValidationError',
                message: error.message,
            });
        } else if (error instanceof UnauthorizedError) {
            res.status(error.status).json({
                success: 'error',
                errorType: 'UnauthorizedError',
                message: error.message,
            });
        }
    }
}

export default Handler;
