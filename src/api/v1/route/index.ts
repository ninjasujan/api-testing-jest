import authRoute from "./auth.route";
import uploadRoute from "./upload.route";

import express, { Router } from "express";
const route: Router = express.Router();

route.use("/auth", authRoute);
route.use("/upload", uploadRoute);

export default route;
