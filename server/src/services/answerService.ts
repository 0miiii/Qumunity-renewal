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
