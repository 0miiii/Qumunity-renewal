import UserModel, { IUser } from "../models/userModel";

export const createUser = async (user: IUser): Promise<IUser> => {
  const newUser = await new UserModel(user).save();

  if (!newUser) {
    throw new Error("유저 생성에 실패했습니다");
  }

  return newUser;
};

export const findUser = async (identifier: string): Promise<IUser> => {
  const user = await UserModel.findOne({
    $or: [{ email: identifier }, { _id: identifier }],
  });

  if (!user) {
    throw new Error("존재하지 않는 유저입니다");
  }

  return user;
};

export const findAllUser = async () => {
  const allUser = await UserModel.find({}).select("-password");
  if (!allUser) {
    throw new Error("유저 정보를 불러오는 중에 에러가 발생했습니다");
  }
  return allUser;
};

export const findUserAndIncreaseQuestion = async (
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
