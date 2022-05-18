import { Request, Response } from 'express';
import usersServices from '../services/usersServices';

const newUSer = async (req: Request, res: Response): Promise<Response> => {
  const { username, classe, level, password } = req.body;
  const token = await usersServices.create(username, classe, level, password);
  return res.status(201).json({ token });
};

export default {
  newUSer,
};