import { Router } from "express";
import * as postController from "../controllers/postController";
import { validateToken } from "../middlewares/authMiddleware";

const router = Router();

router.get("/getAll", postController.findAllPost);
router.post("/get", postController.findPost);
router.post("/register", validateToken, postController.createPost);
router.put("/update", validateToken, postController.updatePost);
router.delete("/delete", validateToken, postController.deletePost);

export default router;
