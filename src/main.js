import { createServer } from "http";
const server = createServer();
server.listen(8000, "127.0.0.1", () => {
  console.log("Server is listening at http://127.0.0.1:8000.");
});
