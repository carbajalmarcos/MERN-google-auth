import { IUser } from "@shared/lib/types";
import { User } from "../db/models/user.schema";
export const createUser = async (data : IUser) => {
  const user = new User(data);
  const newUser = await user.save();
  return newUser;
};
