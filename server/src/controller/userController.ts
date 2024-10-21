import { Request, Response } from "express";
import prisma from "../config/db.config.js";
import jwt from "jsonwebtoken";

interface LoginPayload {
  email: string;
  name: string;
  image: string;
  provider: string;
  oauth_id: string;
}

export const loginUser = async (req: Request, res: Response) => {
  try {
    const body: LoginPayload = req.body;

    let findUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!findUser) {
      findUser = await prisma.user.create({
        data: body,
      });
    }

    let jwtPayload = {
      name: body.name,
      email: body.email,
      id: findUser.id,
    };
    const token = await jwt.sign(jwtPayload, process.env.JWT_SECRET, {
      expiresIn: "365d",
    });

    return res.status(200).json({
      message: "Logged in Successfully",
      user: {
        ...findUser,
        token: `Bearer ${token}`,
      },
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Something went wrong.please try again!" });
  }
};
