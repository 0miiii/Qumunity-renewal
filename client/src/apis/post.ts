import instance from "./intance";
import { IPost } from "../types/post";

export const getPosts = () => {
  return instance.get<IPost[]>("/post").then((res) => res.data);
};

export const getPost = (postId: string) => {
  return instance.get<IPost>(`/post/${postId}`).then((res) => res.data);
};

export const getMyPost = (page: number, limit: number) => {
  return instance
    .get<IPost[]>(`/post/mypost?page=${page}&limit=${limit}`)
    .then((res) => res.data);
};

interface IEnteredPost {
  title: string;
  content: string;
  tags: string[];
}

export const createPost = (post: IEnteredPost) => {
  return instance.post<IPost>("/post/register", post).then((res) => res.data);
};
