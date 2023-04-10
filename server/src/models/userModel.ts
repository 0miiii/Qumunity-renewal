import { Schema, model, Document } from "mongoose";
import { hashPassword } from "../libs/hash";

export interface IUser extends Document {
  email: string;
  password: string;
  nickname: string;
  photoURL: string;
  questions: number;
}

const userSchema = new Schema<IUser>(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    nickname: { type: String, required: true },
    photoURL: { type: String, required: true },
    questions: { type: Number, default: 0 },
  },
  { collection: "users" }
);

userSchema.pre<IUser>("save", async function (next) {
  this.password = await hashPassword(this.password);
  next();
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
