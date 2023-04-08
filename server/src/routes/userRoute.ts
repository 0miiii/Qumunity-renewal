import { Router, Request, Response } from "express";
import * as userController from "../controllers/userController";

const router = Router();

router.get("/signUp", userController.signUp);
router.get("/signIn", userController.signIn);

export default router;
