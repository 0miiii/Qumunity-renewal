import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../libs/jsonwebtoken";

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "로그인이 필요합니다" });
  }

  try {
    const decodedToken = verifyToken(token);
    req.body.decodedToken = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: "로그인이 필요합니다" });
  }
};
