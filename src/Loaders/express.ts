import morgan from "morgan";
import bodyParser from "body-parser";
import { Application } from "express";

export default async (app: Application) => {
  app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms")
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
