import { Schema, model, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  count: number;
}

const tagSchema = new Schema<ITag>(
  {
    name: String,
    count: { type: Number, default: 0 },
  },
  { collection: "tags" }
);

const TagModel = model<ITag>("Answer", tagSchema);

export default TagModel;
