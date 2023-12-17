"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const portaPadrao = 3333;
server_1.server.listen(process.env.PORT || portaPadrao, () => console.log(`rodando na porta ${process.env.PORT || portaPadrao}`));
