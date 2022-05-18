import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Iuser from '../Interfaces/user.interface';

const createUser = async (
  username: string,
  classe: string,
  level: number,
  password:string,
): Promise<Iuser> => {
  const [user] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
    [username, classe, level, password],
  );

  return {
    id: user.insertId,
    username,
    classe,
    level,
    password,
  };
};

export default {
  createUser,
};