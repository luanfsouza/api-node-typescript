import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CidadesController, PessoasController } from "./../controllers";

const router = Router();

router.get("/", (req, res) => {
  return res.send("pagina inicial");
});

router.post(
  "/cidades",
  CidadesController.createBodyValidator,
  CidadesController.createQueryValidator,
  CidadesController.create
);

export { router };
