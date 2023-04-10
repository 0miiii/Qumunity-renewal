import { Request, Response } from "express";
import * as UserService from "../services/userService";
import * as PostService from "../services/postService";

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
    const userinfo = await UserService.getUserAndIncreaseQuestion(
      req.body.decodedToken.email
    );
    const postinfo = await PostService.createPost({
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
      author: userinfo._id,
    });
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

export const getAllPost = async (_: Request, res: Response) => {
  try {
    const posts = await PostService.getAllPost();
    return res.status(200).json({
      success: true,
      message: "모든 게시물을 응답합니다",
      data: posts,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({
        success: false,
        message: "모든 게시물을 불러오는데 실패하였습니다",
      });
  }
};
