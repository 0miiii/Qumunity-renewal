import { hash, compare } from "bcryptjs";

export const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};

export const comparePassword = async (
  enteredPassword: string,
  hashedPassword: string
) => {
  const isValid = await compare(enteredPassword, hashedPassword);
  return isValid;
};
