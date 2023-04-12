import { Request, Response } from "express";
import * as userService from "../services/userService";
import { verifyPassword } from "../libs/hash";
import { createToken, verifyToken } from "../libs/jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser({
      ...req.body,
      photoURL: `https://source.boringavatars.com/beam/130/${req.body.nickname}?square`,
    });

    res.status(200).send({
      message: "Qumunity에 오신 것을 환영합니다",
      token: createToken({ _id: user._id }),
    });
  } catch (err) {
    res.status(400).send({
      message: "회원가입에 실패했습니다",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const user = await userService.findUser(req.body.email);
    const isValid = await verifyPassword(req.body.password, user.password);

    if (!isValid) {
      res.status(400).send({
        message: "비밀번호가 일치하지 않습니다",
      });
    }

    res.status(200).send({
      message: "Qumunity에 오신 것을 환영합니다",
      token: createToken({ _id: user._id }),
    });
  } catch (err) {
    res.status(400).send({
      message: "로그인에 실패했습니다",
    });
  }
};

export const userAuth = (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "로그인이 필요합니다" });
  }

  try {
    verifyToken(token);
    return res.status(200).json({ message: "인증되었습니다" });
  } catch (error) {
    return res.status(401).json({ message: "로그인이 필요합니다" });
  }
};
