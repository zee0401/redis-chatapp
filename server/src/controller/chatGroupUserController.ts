import { Response, Request } from "express";
import prisma from "../config/db.config.js";

interface GroupChatUserTpe {
  name: string;
  group_id: string;
}

export const chatGroupUserIndex = async (req: Request, res: Response) => {
  try {
    const { group_id } = req.query;
    const users = await prisma.groupUsers.findMany({
      where: {
        group_id: group_id as string,
      },
    });
    return res.json({ message: "Data fetched Successfully", data: users });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Something went wrong. Please try again!" });
  }
};

export const chatGroupUserCreate = async (req: Request, res: Response) => {
  try {
    const body: GroupChatUserTpe = req.body;
    const user = await prisma.groupUsers.create({
      data: body,
    });
    return res.json({ message: "User created successfully!", data: user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong.please try again!" });
  }
};
