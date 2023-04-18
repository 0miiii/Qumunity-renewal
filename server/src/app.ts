import express, { Application } from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute";
import postRouter from "./routes/postRoute";
import answerRouter from "./routes/answerRoute";
import { dbConnect } from "./libs/mongoose";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/user", userRouter);
app.use("/api/post", postRouter);
app.use("/api/answer", answerRouter);

app.listen(port, async () => {
  await dbConnect();
  console.log(`listening on port ${port}`);
});
