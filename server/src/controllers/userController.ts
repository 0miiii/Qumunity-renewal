import { Request, Response } from "express";
import * as userService from "../services/userService";

export const createUser = async (req: Request, res: Response) => {
  try {
    await userService.createUser({ ...req.body, photoURL: "test" });
    res.status(200).send({
      message: "Qumunity에 오신 것을 환영합니다",
      token: "임시토큰",
    });
  } catch (err) {
    res.status(400).send({
      message: `회원가입에 실패했습니다 ${err}`,
    });
  }
};

export const loginUser = (req: Request, res: Response) => {
  res.send("로그인");
};
