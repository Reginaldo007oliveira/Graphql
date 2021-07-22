import { gql } from "apollo-server-express";

export const typeDefs = gql`
  interface Node {
    id: ID!
    name: String!
    email: String!
    disabled: Boolean!
  }
`;

export const resolvers = {
  Node: {
    __resolveType: () => null,
  },
};
