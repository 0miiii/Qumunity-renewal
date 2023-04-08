import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
  res.send("회원가입");
};

export const loginUser = (req: Request, res: Response) => {
  res.send("로그인");
};
