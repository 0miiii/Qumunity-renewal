import { Schema, model, Document } from "mongoose";
import { IUser } from "./userModel";

export interface IPost extends Document {
  _id: string;
  title: string;
  content: string;
  tags: string[];
  answers: number;
  views: number;
  votes: number;
  author: IUser;
  createdAt: string;
  updatedAt: string;
}

const postSchema = new Schema<IPost>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: { type: [String], required: true },
    answers: { type: Number, default: 0, required: true },
    views: { type: Number, default: 0, required: true },
    votes: { type: Number, default: 0, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { collection: "posts", timestamps: true }
);

const PostModel = model<IPost>("Post", postSchema);

export default PostModel;
