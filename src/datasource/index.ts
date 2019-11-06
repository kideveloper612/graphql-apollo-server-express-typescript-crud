
import { isEmpty } from 'lodash';
import { userModel, IUser } from './model';

async function getUser(userId: string) {
  return await userModel.findOne({ userId });
}

async function getUserList() {
  return await userModel.find();
}

async function createUser(user: IUser) {
  const exist = await getUser(user.userId);
  return isEmpty(exist) ? await userModel.create(user) : exist;
}

async function updateUser(user: IUser) {
  return await userModel.findOneAndUpdate({ userId : user.userId }, user, {new : true});
}

async function deleteUser(userId: string) {
  const result = await userModel.deleteOne({ userId });
  return Boolean(Number(result.ok));
}

export { getUser, getUserList, createUser, updateUser, deleteUser };
