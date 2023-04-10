import { Request, Response } from "express";
import UserModel from "../models/userModel";
import PostModel from "../models/postModel";

interface ICreateRquest extends Request {
  decodedToken: { email: string };
  title: string;
  content: string;
  tags: string[];
}

export const createPost = async (
  req: Request<{}, {}, ICreateRquest>,
  res: Response
) => {
  try {
    const postinfo = new PostModel({
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
    });
    const userinfo = await UserModel.findOneAndUpdate(
      {
        email: req.body.decodedToken.email,
      },
      { $inc: { questions: 1 } }
    );

    postinfo.author = userinfo._id;
    await postinfo.save();
    return res.status(200).json({
      success: true,
      message: "글 작성에 성공하였습니다",
      data: postinfo,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ success: false, message: "글 작성에 실패하였습니다" });
  }
};
