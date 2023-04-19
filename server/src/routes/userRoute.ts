import { Router } from "express";
import { validateToken } from "../middlewares/authMiddleware";
import * as userController from "../controllers/userController";

const router = Router();

router.get("/", userController.findAllUser);
router.get("/myinfo", validateToken, userController.findMyInfo);
router.get("/auth", userController.checkTokenValidity);
router.get("/:userId", userController.findUser);
router.post("/signUp", userController.signUp);
router.post("/signIn", userController.signIn);

export default router;
