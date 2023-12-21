import { RequestHandler } from "express";

type TValidation = () => RequestHandler;

export const validation: TValidation = () => async (req, res, next) => console.log("eeS");
  
