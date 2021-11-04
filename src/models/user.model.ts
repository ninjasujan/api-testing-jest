import mongoose from '../providers/Database';
import { genderType, platform, loginMethod } from '../constants/user.constants';

export interface ILocation {
    type: string;
    coordinates: [number, number];
}

type GenderType = 'MALE' | 'FEMALE';

export interface IUser {
    name: string;
    email: string;
    mobile: number;
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
    email: {
        type: String,
        required: true,
        unique: true,
    },
    mobile: {
        type: Number,
        required: true,
        unique: true,
    },
    platform: {
        type: String,
        enum: Object.values(platform),
        default: platform.ANDROID,
    },
    location: {
        type: {
            type: String,
            enum: ['point'],
        },
        coordinates: [Number],
    },
    gender: {
        type: String,
        enum: Object.values(genderType),
        default: genderType.MALE,
    },
    loginMethod: {
        type: String,
        default: loginMethod.GOOGLE,
        enum: Object.values(loginMethod),
    },
});

export default mongoose.model<IUserModel>('User', UserSchema);
