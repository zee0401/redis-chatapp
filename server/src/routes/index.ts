import { Router } from "express";
import { loginUser } from "../controller/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { chatGroupStore } from "../controller/chatGroupController.js";

const router = Router();

router.post("/auth/login", loginUser);

router.post("/chatgroup", authMiddleware, chatGroupStore);

export default router;
