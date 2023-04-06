import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  userNum: number;
  email: string;
  displayName: string;
  uid: string;
  photoURL: string;
  voteLike: Schema.Types.ObjectId;
  voteDisLike: Schema.Types.ObjectId;
  questions: number;
  answers: number;
}

const userSchema = new Schema(
  {
    userNum: Number,
    email: String,
    displayName: String,
    uid: String,
    photoURL: String,
    voteLike: [{ type: Schema.Types.ObjectId, default: [] }],
    voteDisLike: [{ type: Schema.Types.ObjectId, default: [] }],
    questions: { type: Number, default: 0 },
    answers: { type: Number, default: 0 },
  },
  { collection: "users" }
);

const User = model<IUser>("User", userSchema);

export default User;
