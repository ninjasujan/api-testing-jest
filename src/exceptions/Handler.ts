import {UnauthorizedError} from 'express-jwt';
import {Request, Response} from 'express';
import APIError from './APIError';
import ValidatioError from './ValidationError';

class Handler {
  public static errorHandler(
    error: APIError | ValidatioError | UnauthorizedError,
    req: Request,
    res: Response,
  ): any {
    if (error instanceof APIError) {
      res.status(error.status).json({
        success: false,
        errorType: 'APIError',
        message: error.message,
      });
    } else if (error instanceof ValidatioError) {
      res.status(error.status).json({
        success: false,
        errorType: 'ValidationError',
        message: error.message,
      });
    } else if (error instanceof UnauthorizedError) {
      res.status(error.status).json({
        success: false,
        errorType: 'UnauthorizedError',
        message: error.message,
      });
    }
  }
}

export default Handler;
