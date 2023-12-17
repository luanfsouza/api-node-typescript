import { server } from "./server/server";

const portaPadrao = 3333;

server.listen(process.env.PORT || portaPadrao, () =>
  console.log(`rodando na porta ${process.env.PORT || portaPadrao}`)
);
