import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;

  if (header === undefined || header === null) {
    res.status(401).send("Unauthorized");
    return;
  }

  const token = header.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      res.status(401).send("Unauthorized");
      return;
    }
    req.user = user as AuthUser;
    next();
  });
};

export default authMiddleware;
