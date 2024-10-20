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

export const createUser = async (req: Request, res: Response) => {
  try {
    const body: LoginPayload = req.body;

    const findUser = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (!findUser) {
      const user = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          image: body.image,
          provider: body.provider,
          oauth_id: body.oauth_id,
        },
      });
    }

    let jwtPayload = {
      name: body.name,
      email: body.email,
      image: body.image,
      provider: body.provider,
      oauth_id: body.oauth_id,
    };
    const token = await jwt.sign(jwtPayload, process.env.JWT_SECRET as string);
  } catch (error) {
    console.log(error);
  }
};
