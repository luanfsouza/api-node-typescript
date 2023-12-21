import { Request, Response } from "express";

export const create = (req: Request, res: Response) => {
  res.send("create pessoa");
};
