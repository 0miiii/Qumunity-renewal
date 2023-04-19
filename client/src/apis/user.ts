import instance from "./intance";
import { IUser } from "../types/user";

export const getUsers = () => {
  return instance.get<IUser[]>("/user").then((res) => res.data);
};

export const getUser = (userId: string) => {
  return instance.get<IUser>(`/user/:${userId}`).then((res) => res.data);
};
