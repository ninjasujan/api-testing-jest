import { Document, model, Schema } from "mongoose";

enum Platform {
	android = "android",
	web = "web",
	ios = "ios",
}

interface UserInterface extends Document {
	name: string;
	email: string;
	platform: string;
}

const userSchema = new Schema<UserInterface>({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	some: {
		type: String,
		default: Platform.web,
		enum: Object.values(Platform),
	},
});

export default model<UserInterface>("user", userSchema);
