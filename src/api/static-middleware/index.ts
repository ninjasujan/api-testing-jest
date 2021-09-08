import { Application } from "express";
import expressLoader from "./express";
import mongoose from "./mongoose";
import dotenv from "dotenv";

export default async (app: Application) => {
	expressLoader(app);
	dotenv.config();
	mongoose()
		.then((res) => {
			console.log("[Mongoose connection] success");
		})
		.catch((err) => {
			console.log("[Mongoose Error]", err);
		});
};
