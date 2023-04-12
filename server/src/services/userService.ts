import UserModel, { IUser } from "../models/userModel";

export const createUser = async (user: IUser): Promise<IUser> => {
  const newUser = await new UserModel(user).save();

  if (!newUser) {
    throw new Error("유저 생성에 실패했습니다");
  }

  return newUser;
};

export const findUser = async (email: string): Promise<IUser> => {
  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new Error("존재하지 않는 유저입니다");
  }

  return user;
};

export const getUserAndIncreaseQuestion = async (
  userId: string
): Promise<IUser> => {
  const userinfo = await UserModel.findOneAndUpdate(
    { _id: userId },
    { $inc: { questions: 1 } }
  );

  if (!userinfo) {
    throw new Error("존재하지 않는 유저입니다");
  }

  return userinfo;
};
