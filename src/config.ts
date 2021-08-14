import * as dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_URI: process.env.MONGO_URI ?? "",
  PORT: process.env.PORT ?? 80,
};
