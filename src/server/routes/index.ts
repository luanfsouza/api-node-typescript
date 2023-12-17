import { Router } from "express";
import { StatusCodes } from "http-status-codes";

const router = Router();

router.get("/", (req, res) => {
  return res.send("ola mundo DEV!!!!");
});

router.post("/teste", (req, res) => {
  //console.log(req.params.id);
  //console.log(req.query.teste);
  //console.log(req.cookies);

  return res.status(StatusCodes.BAD_GATEWAY).json(req.body);
});

export { router };
