import mongoose from "mongoose";
import config from "../../config";

export default async () => {
	return mongoose.connect(config.MONGO_URI, {
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
