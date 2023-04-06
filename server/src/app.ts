import express, { Application } from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import path from "path";
import userRouter from "./routes/userRoute";

const app: Application = express();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "./client/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // mongoose
  //   .connect("")
  //   .then(() => console.log(`mongoose connection successful`))
  //   .catch((err) => console.log(err));

  console.log(`Server listening on port ${port}`);
});
