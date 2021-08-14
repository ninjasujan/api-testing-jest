import express, { Application, Request, Response, NextFunction } from "express";
import middlewareLoader from "./Loaders";
import mainRoute from "./api/main.route";

const app: Application = express();

middlewareLoader(app);

app.use("/api", mainRoute);

app.use("/health", (req: Request, res: Response, next: NextFunction) =>
  res.status(200).send("OK")
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const message = err.message || "something went wrong.!";
  const status = 500;
  res.status(status).json({ message });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "Invalid api endpoint" });
});

export default app;
