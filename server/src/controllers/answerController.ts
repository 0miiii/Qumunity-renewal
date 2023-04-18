import { Request, Response } from "express";
import * as UserService from "../services/userService";
import * as PostService from "../services/postService";
import * as AnswerService from "../services/answerService";

interface IReqAnswer {
  postId: string;
  content: string;
}

interface ICreateReq extends IReqAnswer {
  decodedToken: { _id: string };
}

export const createAnswer = async (
  req: Request<{}, {}, ICreateReq>,
  res: Response
) => {
  try {
    const author = await UserService.findUserAndIncreaseNum(
      "answers",
      req.body.decodedToken._id
    );
    const post = await PostService.findPostAndIncreaseNum(req.body.postId);
    const answerinfo = await AnswerService.createAnswer({
      content: req.body.content,
      author: author._id,
      post: post._id,
    });

    return res.status(200).json(answerinfo);
  } catch (err) {
    console.error(err);
    return res.status(400).json("답변 작성에 실패하였습니다");
  }
};
