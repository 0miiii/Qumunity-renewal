import PostModel, { IPost } from "../models/postModel";

export const createPost = async (post: IPost): Promise<IPost> => {
  const newPost = await new PostModel(post).save();

  if (!newPost) {
    throw new Error("게시물 생성에 실패하였습니다");
  }

  return newPost;
};
