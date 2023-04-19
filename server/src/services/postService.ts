import PostModel, { IPost } from "../models/postModel";

interface IReqPost {
  title: string;
  content: string;
  tags: string[];
}

interface ISavePost extends IReqPost {
  author: string;
}

export const createPost = async (post: ISavePost): Promise<IPost> => {
  try {
    return await new PostModel(post).save();
  } catch (err) {
    throw new Error(`게시물 생성 에러 ${err}`);
  }
};

export const findAllPost = async (userId?: string): Promise<IPost[]> => {
  try {
    if (userId) {
      return await PostModel.find({ author: userId }).populate("author");
    }
    return await PostModel.find().populate("author");
  } catch (err) {
    throw new Error(`모든 게시물 찾기 에러 ${err}`);
  }
};

export const findPost = async (postId: string): Promise<IPost> => {
  try {
    return await PostModel.findOne({ _id: postId }).populate("author");
  } catch (err) {
    throw new Error(`게시물 찾기 에러 ${err}`);
  }
};

export const findPostAndIncreaseNum = async (
  postId: string
): Promise<IPost> => {
  try {
    return await PostModel.findByIdAndUpdate(postId, { $inc: { answers: 1 } });
  } catch (err) {
    throw new Error(`유저 찾기 실패 ${err}`);
  }
};

export const updatePost = async (
  postId: string,
  post: IReqPost
): Promise<IPost> => {
  try {
    return await PostModel.findByIdAndUpdate(postId, {
      $set: post,
    });
  } catch (err) {
    throw new Error(`게시물 수정 에러 ${err}`);
  }
};

export const deletePost = async (postId: string): Promise<IPost> => {
  try {
    return await PostModel.findByIdAndDelete(postId);
  } catch (err) {
    throw new Error(`게시물 삭제 에러 ${err}`);
  }
};
