import { Router, Request, Response } from "express";
import * as userController from "../controllers/userController";

const router = Router();

router.post("/signUp", userController.createUser);
router.post("/signIn", userController.loginUser);

export default router;
