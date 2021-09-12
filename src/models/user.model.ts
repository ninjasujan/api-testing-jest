import mongoose from "../providers/Database";
import { platform } from "../constants/user.constants";

export interface ILocation {
	type: string;
	coordinates: [number, number];
}

enum ISignUpMethod {
	GOOGLE = "GOOGLE",
	OTP = "OTP",
	FACEBOOK = "FACEBOOK",
}

type GenderType = "male" | "fmale";

export interface IUser {
	name: string;
	emai: string;
	mobileNumber: string;
	age: number;
	platform: string;
	location: [ILocation];
	gender: GenderType;
	loginMethod: string;
}

export interface IUserModel extends IUser, mongoose.Document {}

export const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	emai: {
		type: String,
		required: true,
	},
	mobileNumber: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		min: 13,
		max: 70,
	},
	platform: {
		type: String,
		enum: Object.values(platform),
	},
	location: {
		type: {
			type: String,
			enum: ["point"],
		},
		coordinates: [mongoose.Schema.Types.Decimal128],
	},
	gender: {
		type: String,
	},
	loginMethod: {
		type: String,
		enum: Object.values(ISignUpMethod),
	},
});

export default mongoose.model<IUserModel>("User", UserSchema);
