import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI!;

export default async () => {
	return mongoose.connect(MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	});
};

mongoose.connection.on("connected", () => {
	console.log("[Mongoose connection] connected");
});

mongoose.connection.on("error", () => {
	console.log("[Mongoose Error] connection error");
});

mongoose.connection.on("disconnected", () => {
	console.log("[MongooseError] connection disconnected");
});
