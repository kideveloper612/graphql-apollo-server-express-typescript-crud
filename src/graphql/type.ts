
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    user(userId: String!): User
    users: [User]
  }

  type Mutation {
    createUser(user: UserInput!): User
    updateUser(user: UserInput!): User
    deleteUser(userId: String!): Boolean
  }

  type User {
    _id: ID!
    userId: String
    name: String
    role: Int
  }

  input UserInput {
    userId: String
    name: String
    role: Int
  }
`;

export { typeDefs };
