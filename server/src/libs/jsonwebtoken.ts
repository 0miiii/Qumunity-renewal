import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface Ipayload {
  email: string;
}

export const createToken = (payload: Ipayload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY);
};
