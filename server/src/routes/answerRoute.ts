import { Router } from "express";
import { validateToken } from "../middlewares/authMiddleware";
import * as answerController from "../controllers/answerController";

const router = Router();

router.post("/register", validateToken, answerController.createAnswer);

export default router;
