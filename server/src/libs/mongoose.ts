import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
  await mongoose
    .connect(process.env.MONGOOSE_API_KEY)
    .then(() => console.log(`mongoose connection successful`))
    .catch((err) => console.log(err));
};
