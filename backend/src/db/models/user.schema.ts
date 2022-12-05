import { IUser } from '@shared/lib/types';
import { Schema, model, connect } from 'mongoose';

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  level: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  googleToken: { type: String }
});

export const User = model<IUser>('User', userSchema);