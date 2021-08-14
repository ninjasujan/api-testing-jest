import mongoose from "mongoose";
import config from "../config";

export default async () => {
  mongoose.connect(config.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on("connected", () => {
    console.log("DB connected");
  });

  mongoose.connection.on("error", () => {
    console.log("failed to connect db");
  });
};
