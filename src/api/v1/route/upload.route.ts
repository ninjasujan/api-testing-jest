import express, { Router } from "express";
const router: Router = express.Router();
import { body } from "express-validator";

router.post("/upload-object", [
  body("fileName", "Invalid file name.!").notEmpty().isString(),
]);

export default router;
