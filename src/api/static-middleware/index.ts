import { Application } from "express";
import expressLoader from "./express";
import mongoose from "./mongoose";

export default async (app: Application) => {
	expressLoader(app);
	mongoose()
		.then((res) => {
			console.log("[Mongoose connection] success");
		})
		.catch((err) => {
			console.log("[Mongoose Error]", err);
		});
};
