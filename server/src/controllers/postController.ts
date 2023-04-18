import { Request, Response } from "express";
import * as UserService from "../services/userService";
import * as PostService from "../services/postService";

interface IReqPost extends Request {
  title: string;
  content: string;
  tags: string[];
}

interface ICreateReq extends IReqPost {
  decodedToken: { _id: string };
}

interface IUpdateReq extends ICreateReq {
  postId: string;
}

export const createPost = async (
  req: Request<{}, {}, ICreateReq>,
  res: Response
) => {
  try {
    const userinfo = await UserService.findUserAndIncreaseQuestionNum(
      req.body.decodedToken._id
    );
    const postinfo = await PostService.createPost({
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
      author: userinfo._id,
    });
    return res.status(200).json(postinfo);
  } catch (err) {
    console.error(err);
    return res.status(400).json("글 작성에 실패하였습니다");
  }
};

export const findAllPost = async (_: Request, res: Response) => {
  try {
    const posts = await PostService.findAllPost();
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    return res.status(400).json("모든 게시물을 불러오는데 실패하였습니다");
  }
};

export const findPost = async (
  req: Request<{}, {}, { postId: string }>,
  res: Response
) => {
  try {
    const post = await PostService.findPost(req.body.postId);
    return res.status(200).json(post);
  } catch (err) {
    console.error(err);
    return res.status(400).json("게시물을 불러오는데 실패하였습니다");
  }
};

export const updatePost = async (
  req: Request<{}, {}, IUpdateReq>,
  res: Response
) => {
  try {
    const postId = req.body.postId;
    const requestPost = {
      title: req.body.title,
      content: req.body.content,
      tags: req.body.tags,
    };
    const updatedPost = await PostService.updatePost(postId, requestPost);
    return res.status(200).json(updatedPost);
  } catch (err) {
    console.error(err);
    return res.status(400).json("게시물을 수정 중에 오류가 발생했습니다");
  }
};

export const deletePost = async (
  req: Request<{}, {}, { postId: string }>,
  res: Response
) => {
  try {
    const deletePost = await PostService.deletePost(req.body.postId);
    return res.status(200).json(deletePost);
  } catch (err) {
    console.error(err);
    return res.status(400).json("게시물을 삭제 중에 오류가 발생했습니다");
  }
};
