import { Request, Response } from "express";

export const signUp = (req: Request, res: Response) => {
  res.send("회원가입");
};

export const signIn = (req: Request, res: Response) => {
  res.send("로그인");
};
