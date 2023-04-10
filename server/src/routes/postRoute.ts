import { Router } from "express";
import * as postController from "../controllers/postController";
import { validateToken } from "../middlewares/authMiddleware";

const router = Router();

router.post("/register", validateToken, postController.createPost);

export default router;