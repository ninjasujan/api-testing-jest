import express, { Router, Request, Response, NextFunction } from "express";
const router: Router = express.Router();
import { body, validationResult } from "express-validator";
import AuthService from "../service/auth.service";

const authService = new AuthService();

router.post(
  "/login",
  [body("email", "Invalid email.!").notEmpty().isEmail()],
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email }: { email: string } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const message = errors.array()[0].msg;
        throw new Error(message);
      }
      const response = await authService.login(email);
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
