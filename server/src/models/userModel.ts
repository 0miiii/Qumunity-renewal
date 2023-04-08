import { Schema, model, Document } from "mongoose";
import { hashPassword, comparePassword } from "../libs/hash";

export interface IUser extends Document {
  email: string;
  password: string;
  nickName: string;
  photoURL: string;
  verifyPassword: (enteredPassword: string) => Promise<boolean>;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickName: { type: String, required: true },
    photoURL: { type: String, required: true },
  },
  { collection: "users" }
);

userSchema.pre<IUser>("save", async function (next) {
  this.password = await hashPassword(this.password);
  next();
});

userSchema.methods.verifyPassword = async function (enteredPassword: string) {
  return await comparePassword(enteredPassword, this.password);
};

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
