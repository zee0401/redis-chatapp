import { Router } from "express";
import { loginUser } from "../controller/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  chatGroupDestroy,
  chatGroupIndex,
  chatGroupShow,
  chatGroupStore,
  chatGroupupdate,
} from "../controller/chatGroupController.js";

const router = Router();

//login
router.post("/auth/login", loginUser);

//chat group
router.post("/chat-group", authMiddleware, chatGroupStore);

router.get("/chat-group/:id", authMiddleware, chatGroupShow);

router.get("/chat-group", authMiddleware, chatGroupIndex);

router.put("/chat-group/:id", authMiddleware, chatGroupupdate);

router.delete("/chat-group/:id", authMiddleware, chatGroupDestroy);

export default router;
