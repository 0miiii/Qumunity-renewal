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
