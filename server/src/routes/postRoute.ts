import { Router } from "express";
import * as postController from "../controllers/postController";

const router = Router();

router.post("/register", postController.createPost);

export default router;
