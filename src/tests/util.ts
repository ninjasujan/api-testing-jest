import UserModel from '../models/user.model';
export const dbUrl = 'mongodb://127.0.0.1:27017/uni-test';

export const saveTemplateUser = async (payload: any) =>
    new UserModel(payload).save();
