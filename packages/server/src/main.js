import express from "express";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  const app = express();

  server.applyMiddleware({
    app,
    // Comentado porque buga o studio
    // cors: {
    //     origin: 'http://localhost:3000'
    // },
    bodyParserConfig: true,
  });

  const PORT = process.env.PORT ? parseInt(process.env.PORT) : 7000;
  const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

  // await server.listen(PORT, HOSTNAME, () => {
  //     console.log(`Server is listening at http://${HOSTNAME}:${PORT}`);
  // })

  await new Promise((resolve) => app.listen({ port: PORT }, resolve));

  return { server, app };
}

startApolloServer();
