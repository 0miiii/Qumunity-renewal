import UserModel, { IUser } from "../models/userModel";

export const createUser = async (user: IUser) => {
  const newUser = new UserModel(user).save();

  if (!newUser) {
    throw new Error("유저 생성에 실패했습니다.");
  }

  return newUser;
};
