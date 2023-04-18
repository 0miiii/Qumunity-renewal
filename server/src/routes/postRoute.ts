import { Router } from "express";
import * as postController from "../controllers/postController";
import { validateToken } from "../middlewares/authMiddleware";

const router = Router();

router.get("/getposts", postController.findAllPostCtr);
router.post("/getpost", postController.findPostCtr);
router.post("/register", validateToken, postController.createPostCtr);
router.put("/update", validateToken, postController.updatePostCtr);
router.delete("/delete", validateToken, postController.deletePostCtr);

export default router;
