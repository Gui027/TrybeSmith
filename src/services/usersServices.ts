import userModels from '../models/userModels';
import jwt from '../Auth/jwt';

const create = async (
  username: string,
  classe: string,
  level: number,
  password: string,
): Promise<string> => {
  const payload = await userModels.createUser(username, classe, level, password);
  const token: string = jwt.generateToken(payload);
  return token;
};

export default {
  create,
};