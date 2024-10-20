import { Router } from "express";
import { loginUser } from "../controller/userController.js";

const router = Router();

router.post("/auth/login", loginUser);

export default router;
