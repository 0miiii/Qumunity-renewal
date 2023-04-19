import { Schema, model, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  description: string;
  count: number;
}

const tagSchema = new Schema<ITag>(
  {
    name: String,
    description: { type: String, default: "태그를 설명해주세요" },
    count: { type: Number, default: 0 },
  },
  { collection: "tags" }
);

const TagModel = model<ITag>("Answer", tagSchema);

export default TagModel;
