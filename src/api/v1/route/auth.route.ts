import express, { Router, Request, Response, NextFunction } from "express";
const router: Router = express.Router();
import { body } from "express-validator";
import authController from "../controller/auth.controller";

router.post(
	"/login",
	[body("email", "Invalid email.!").notEmpty().isEmail()],
	authController.loginHandler
);

export default router;
