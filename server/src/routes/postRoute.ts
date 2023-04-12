import { Router } from "express";
import * as postController from "../controllers/postController";
import { validateToken } from "../middlewares/authMiddleware";

const router = Router();

router.get("/getposts", postController.getAllPost);
router.post("/getpost", postController.getPost);
router.post("/register", validateToken, postController.writePost);

export default router;
