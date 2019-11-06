
import { resolvers } from './resolver';
import { typeDefs } from './type';
import { makeExecutableSchema } from 'graphql-tools';

const userSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export { userSchema };
