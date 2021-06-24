const {ApolloServer, gql} = require('apollo-server');
//Toda request é Post
// Toda request bate no MESMO endpoint (/graphql)
//Query -> Obter informações (GET)
// Mutation Types - Strings, Int, Boolean, Float e ID
/** 
 query{
     posts{
         title
         author{
             name
             email
             active
         }
     }
 }
*/
const typeDefs = gql`
type User {
    id: ID!
    name: String! 
    email: String!
    active: Boolean!
}
type Post {
    id: ID!
    title: String! 
    content: String!
    author: User!
}
type Query{
    hello: String 
    users: [User!]!
    getUserByEmail(email: String!): User!
   
} 

type Mutation{
    createUser(name:String!, email: String!): User!
}

`;

const users = [
            
    {id: String(Math.random()), name: 'Matheus',  email:'contato@gmail.com',  active: true},
    {id: String(Math.random()), name: 'Matheus2', email:'contato@gmail2.com', active: false},
    {id: String(Math.random()), name: 'Matheus3', email:'contato@gmail3.com', active: true},
            ];

const resolvers = {
    Query: {
        hello: () => 'Hello world',
        users: () => users,
        getUserByEmail: (_, args) => {
return users.find((user)=> user.email === args.email);
        },
       
    },
    Mutation: {
createUser: (_, args) => {
    const newUser = {
        id: String(Math.random()),
        name: args.name,
        email: args.email,
        active: true,

    };
    users.push(newUser);
    return newUser;

}
    },
};

const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => console.log(` Server started at ${url}`));