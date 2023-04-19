import instance from "./intance";
import { IPost } from "../types/post";

export const getPosts = () => {
  return instance.get<IPost[]>("/post").then((res) => res.data);
};

export const getPost = (postId: string) => {
  return instance.get<IPost>(`/post/${postId}`).then((res) => res.data);
};
