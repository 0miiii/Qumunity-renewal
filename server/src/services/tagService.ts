import TagModel, { ITag } from "../models/tagModel";

export const createTag = async (name: string): Promise<ITag> => {
  try {
    return await TagModel.findOneAndUpdate(
      { name: name },
      { $inc: { tagCount: 1 } },
      { upsert: true }
    );
  } catch (err) {
    throw new Error(`태그 생성 실패 ${err}`);
  }
};
