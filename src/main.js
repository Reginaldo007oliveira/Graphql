import { createServer } from "http";

const server = createServer((request, response) => {
  switch (request.url) {
    case "/status": {
      response.writeHead(200);
      response.write("okay");
      response.end();
      return;
    }
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Server is listening at http://127.0.0.1:8000.");
});
