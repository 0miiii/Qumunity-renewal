import { Request, Response } from "express";
import * as userService from "../services/userService";
import { verifyPassword } from "../libs/hash";
import { createToken, verifyToken } from "../libs/jsonwebtoken";

interface ISignUpRequest extends Request {
  decodedToken: { _id: string };
}

export const signUp = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser({
      ...req.body,
      photoURL: `https://source.boringavatars.com/beam/130/${req.body.nickname}?square`,
    });

    return res.status(200).json({ token: createToken({ _id: user._id }) });
  } catch (err) {
    return res.status(400).json("회원가입에 실패했습니다");
  }
};

export const signIn = async (req: Request, res: Response) => {
  try {
    const user = await userService.findUser(req.body.email);
    const isValid = await verifyPassword(req.body.password, user.password);

    if (!isValid) {
      return res.status(400).json("비밀번호가 일치하지 않습니다");
    }

    return res.status(200).json({ token: createToken({ _id: user._id }) });
  } catch (err) {
    return res.status(400).json("로그인에 실패했습니다");
  }
};

export const checkTokenValidity = (req: Request, res: Response) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json("로그인이 필요합니다");
  }

  try {
    verifyToken(token);
    return res.status(200).json("인증되었습니다");
  } catch (err) {
    return res.status(401).json("토큰이 유효하지 않습니다");
  }
};

export const findAllUser = async (_: Request, res: Response) => {
  try {
    const users = await userService.findAllUser();
    return res.status(200).json(users);
  } catch (err) {
    console.error(err);
    return res.status(400).json("모든 유저를 불러오는데 실패하였습니다");
  }
};

export const findMyInfo = async (
  req: Request<{}, {}, ISignUpRequest>,
  res: Response
) => {
  try {
    const myinfo = await userService.findUser(req.body.decodedToken._id);
    return res.status(200).json(myinfo);
  } catch (err) {
    console.error(err);
    return res.status(400).json("나의 정보 찾기에 실패하였습니다");
  }
};
