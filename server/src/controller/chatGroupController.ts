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

export const chatGroupShow = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (id) {
      const group = await prisma.chatGroup.findUnique({
        where: {
          id: id,
        },
      });
      return res.json({ data: group });
    }

    return res.status(404).json({ message: "No groups found" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong.please try again!" });
  }
};

export const chatGroupupdate = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    if (id) {
      await prisma.chatGroup.update({
        data: body,
        where: {
          id: id,
        },
      });
      return res.json({ message: "Group updated successfully!" });
    }

    return res.status(404).json({ message: "No groups found" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong.please try again!" });
  }
};
