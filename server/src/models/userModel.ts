import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  nickName: string;
  photoURL: string;
}

const userSchema = new Schema<IUser>(
  {
    email: String,
    password: String,
    nickName: String,
    photoURL: String,
  },
  { collection: "users" }
);

const User = model<IUser>("User", userSchema);

export default User;
