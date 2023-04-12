import PostModel, { IPost } from "../models/postModel";

interface IRequestPost {
  title: string;
  content: string;
  tags: string[];
  author: string;
}

export const createPost = async (post: IRequestPost): Promise<IPost> => {
  const newPost = await new PostModel(post).save();

  if (!newPost) {
    throw new Error("게시물 생성에 실패하였습니다");
  }

  return newPost;
};

export const findAllPost = async (): Promise<IPost[]> => {
  const posts = await PostModel.find().populate("author");

  if (!posts) {
    throw new Error("모든 게시물을 찾는 것에 실패했습니다");
  }

  return posts;
};

export const findPost = async (postId: string): Promise<IPost> => {
  try {
    return await PostModel.findById(postId);
  } catch (err) {
    throw new Error(`게시물을 찾는 중에 에러가 발생했습니다 ${err}`);
  }
};
