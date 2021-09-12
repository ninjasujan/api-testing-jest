import express, { Router } from "express";
import v1Route from "./v1/route/index";

const route: Router = express.Router();

route.use("/v1", v1Route);
// route.use("/v2", v2Route);

export default route;
