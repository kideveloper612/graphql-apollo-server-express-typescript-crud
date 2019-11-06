
import mongoose, { Document, Schema } from 'mongoose';

const userSchema = new Schema({
  userId: String,
  name: String,
  role : Number,
});

export interface IUser {
  userId: string;
  name: string;
  role: number;
}

interface IUserModel extends IUser, Document {}

export const userModel = mongoose.model<IUserModel>('users', userSchema);
