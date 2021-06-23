const {ApolloServer, gql} = require('apollo-server');
//Toda request é Post
// Toda request bate no MESMO endpoint (/graphql)
//Query -> Obter informações (GET)
// Mutation Types - Strings, Int, Boolean, Float e ID
const typeDefs = gql`
type Query{
    hello: String 
}
`;
const resolvers = {
    Query: {
        hello: () => 'Hello world'
    }
};

const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => console.log(` Server started at ${url}`));