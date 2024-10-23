import { Request, Response } from "express";
import prisma from "../config/db.config.js";
import { create } from "domain";

export const chatGroupStore = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const user = req.user;

    await prisma.chatGroup.create({
      data: {
        title: body?.title,
        passcode: body?.passcode,
        user_id: parseInt(user.id),
      },
    });
    return res.json({ message: "Chat Group created successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const chatGroupIndex = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const user = req.user;

    const groups = await prisma.chatGroup.findMany({
      where: {
        user_id: parseInt(user.id),
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return res.json({
      message: "Chat Group fetched successfully!",
      data: groups,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
