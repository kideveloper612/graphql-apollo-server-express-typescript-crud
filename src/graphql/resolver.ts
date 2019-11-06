
import { getUser, getUserList, createUser, updateUser, deleteUser } from '../datasource';
import { IUser } from '../datasource/model';

const resolvers = {
  Query: {
    user: (parent: any, { userId }: { userId: string }) => getUser(userId),
    users: (parent: any) => getUserList(),
  },

  Mutation: {
    createUser: (parent: any, { user }: { user: IUser }) => createUser(user),
    updateUser: (parent: any, { user }: { user: IUser }) => updateUser(user),
    deleteUser: (parent: any, { userId }: { userId: string }) => deleteUser(userId),
  },
};

export { resolvers };
