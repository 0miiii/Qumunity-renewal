import { Request, Response } from "express";
import * as userService from "../services/userService";
import { verifyPassword } from "../libs/hash";
import { createToken } from "../libs/jsonwebtoken";

export const createUser = async (req: Request, res: Response) => {
  try {
    await userService.createUser({
      ...req.body,
      photoURL: `https://source.boringavatars.com/beam/130/${req.body.nickname}?square`,
    });
    res.status(200).send({
      message: "Qumunity에 오신 것을 환영합니다",
      token: createToken({ email: req.body.email }),
    });
  } catch (err) {
    res.status(400).send({
      message: `회원가입에 실패했습니다 ${err}`,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.findUser(req.body.email);
    const isValid = await verifyPassword(req.body.password, user.password);
    console.log(isValid);
    if (!isValid) {
      throw new Error("비밀번호가 일치하지 않습니다");
    }

    res.status(200).send({
      message: "Qumunity에 오신 것을 환영합니다",
      token: createToken({ email: req.body.email }),
    });
  } catch (err) {
    res.status(400).send({
      message: `로그인에 실패했습니다 ${err}`,
    });
  }
};
