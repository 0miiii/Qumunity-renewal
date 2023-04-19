import AnswerModel, { IAnswer } from "../models/answerModel";

interface IReqAnswer {
  content: string;
}

interface ISaveAnswer extends IReqAnswer {
  author: string;
  post: string;
}

export const createAnswer = async (answer: ISaveAnswer): Promise<IAnswer> => {
  try {
    return await new AnswerModel(answer).save();
  } catch (err) {
    throw new Error(`답변 생성 에러 ${err}`);
  }
};

export const findAnswer = async (id: string): Promise<IAnswer[]> => {
  try {
    return await AnswerModel.find({
      $or: [{ author: id }, { post: id }],
    }).populate("author");
  } catch (err) {
    throw new Error(`답변 찾기 에러 ${err}`);
  }
};

export const updateAnswer = async () => {};

export const deleteAnswer = async (answerId: string): Promise<IAnswer> => {
  try {
    return await AnswerModel.findByIdAndDelete(answerId);
  } catch (err) {
    throw new Error(`답변 삭제 에러 ${err}`);
  }
};
