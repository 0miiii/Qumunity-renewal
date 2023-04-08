import { Router, Request, Response } from "express";
import * as userController from "../controllers/userController";

const router = Router();

router.get("/signUp", userController.createUser);
router.get("/signIn", userController.loginUser);

export default router;
