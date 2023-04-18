import mongoose from "mongoose";
import UserModel, { IUser } from "../models/userModel";

export const createUser = async (user: IUser): Promise<IUser> => {
  try {
    return await new UserModel(user).save();
  } catch (err) {
    throw new Error(`유저 생성 실패 ${err}`);
  }
};

export const findUser = async (identifier: string): Promise<IUser> => {
  try {
    const ValidId = mongoose.Types.ObjectId.isValid(identifier);
    return await UserModel.findOne({
      $or: [{ email: identifier }, { _id: ValidId ? identifier : null }],
    });
  } catch (err) {
    throw new Error(`유저 찾기 실패 ${err}`);
  }
};

export const findAllUser = async (): Promise<IUser[]> => {
  try {
    return await UserModel.find().select("-password");
  } catch (err) {
    throw new Error(`모든 유저 찾기 실패 ${err}`);
  }
};

export const findUserAndIncreaseNum = async (
  increaseType: "questions" | "answers",
  userId: string
): Promise<IUser> => {
  const increase =
    increaseType === "questions"
      ? { $inc: { questions: 1 } }
      : { $inc: { answers: 1 } };

  try {
    return await UserModel.findByIdAndUpdate(userId, increase);
  } catch (err) {
    throw new Error(`유저 찾기 실패 ${err}`);
  }
};
