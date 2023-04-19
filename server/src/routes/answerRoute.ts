import { Router } from "express";
import { validateToken } from "../middlewares/authMiddleware";
import * as answerController from "../controllers/answerController";

const router = Router();

router.post("/", answerController.findAnswer);
router.post("/register", validateToken, answerController.createAnswer);
router.post("/delete", validateToken, answerController.deleteAnswer);

export default router;
