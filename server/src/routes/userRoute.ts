import { Router } from "express";
import { validateToken } from "../middlewares/authMiddleware";
import * as userController from "../controllers/userController";

const router = Router();

router.get("/auth", userController.isTokenValid);
router.get("/getUsers", userController.getAllUserInfo);
router.get("/getMyInfo", validateToken, userController.getMyInfo);
router.post("/signUp", userController.signUp);
router.post("/signIn", userController.signIn);

export default router;
