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
router.post("/chatgroup", authMiddleware, chatGroupStore);

router.get("/chatgroup/:id", authMiddleware, chatGroupShow);

router.get("/chatgroup", authMiddleware, chatGroupIndex);

router.put("/chatgroup/:id", authMiddleware, chatGroupupdate);

router.delete("/chatgroup/:id", authMiddleware, chatGroupDestroy);

export default router;
