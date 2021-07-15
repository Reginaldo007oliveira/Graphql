//createServer .. serve para criar servidores ..
//metodo listen
//roteamento mais de uma forma de acessar o serviço de uma api
//retornar coisas .. usar o obj response
//   default retorna qualquer coisa que não seja status
//PORT=3000 npm run start para rodar na porta 3000
//até aqui está rodando na porta 3 mil http://127.0.0.1:3000/status se não for status então cai no default 404

import { createServer } from "http";
const server = createServer((request, response) => {
  switch (request.url) {
    case "/status": {
      response.writeHead(200, {
        "Content-Type": "application/json",
      });
      response.write(
        JSON.stringify({
          status: "É nois",
        })
      );
      response.end();
      break;
    }

    default: {
      response.writeHead(404, "Service not found");

      response.end();
    }
  }
});
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://127.0.0.1:${PORT}.`);
});
