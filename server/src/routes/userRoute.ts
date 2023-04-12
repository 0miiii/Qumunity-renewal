import { Router } from "express";
import * as userController from "../controllers/userController";

const router = Router();

router.get("/auth", userController.isTokenValid);
router.post("/signUp", userController.signUp);
router.post("/signIn", userController.signIn);

export default router;
