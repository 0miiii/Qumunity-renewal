import express, { Application } from "express";
import morgan from "morgan";
import path from "path";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute";
import { dbConnect } from "./libs/mongoose";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);

app.listen(port, async () => {
  await dbConnect();
  console.log(`listening on port ${port}`);
});
