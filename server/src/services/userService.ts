import UserModel, { IUser } from "../models/userModel";

export const createUser = async (user: IUser) => {
  try {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
  } catch (err) {
    throw new Error(`Error while saving user to db ${err}`);
  }
};
