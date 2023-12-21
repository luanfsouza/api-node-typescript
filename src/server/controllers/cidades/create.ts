import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";

import { validation } from "../../shared/middlewares/validation";

interface ICidade {
  nome: string;
  estado: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object({
  nome: yup
    .string()
    .required()
    .min(3, "o atributo nome deve ter no minimo 3 caracteres."),
  estado: yup
    .string()
    .required()
    .min(4, "o atributo estado deve ter no minimo 4 caracteres"),
});

interface IFilter {
  filter?: string;
}
const queryValidation: yup.Schema<IFilter> = yup.object({
  filter: yup.string().required().min(3),
});

export const createQueryValidator: RequestHandler = async (req, res, next) => {
  try {
    await queryValidation.validate(req.query, {
      abortEarly: false,
    });
    return next();
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const validationErros: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (!error.path) return;
      validationErros[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationErros,
    });
  }
};

export const createBodyValidator: RequestHandler = async (req, res, next) => {
  try {
    await bodyValidation.validate(req.body, {
      abortEarly: false,
    });
    return next();
  } catch (error) {
    const yupError = error as yup.ValidationError;
    const validationErros: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (!error.path) return;
      validationErros[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors: validationErros,
    });
  }
};

export const createValidation = validation();

export const create = async (req: Request<{}, {}, ICidade>, res: Response) =>
  res.json(req.body);
