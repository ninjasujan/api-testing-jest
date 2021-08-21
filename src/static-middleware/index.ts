import { Application } from "express";
import expressLoader from "./express";
import mongoose from "./mongoose";

export default async (app: Application) => {
  await expressLoader(app);
  await mongoose();
};
