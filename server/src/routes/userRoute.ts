import { Router, Request, Response } from "express";
import * as userController from "../controllers/userController";

const router = Router();

router.get("/auth", userController.userAuth);
router.post("/signUp", userController.createUser);
router.post("/signIn", userController.login);

export default router;
