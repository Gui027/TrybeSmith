import { Request, Response } from 'express';
import orderServices from '../services/orderServices';

const getAll = async (req: Request, res: Response): Promise<Response> => {
//   const { id } = req.params;
  const orders = await orderServices.findOrders();
  return res.status(200).json(orders);
};

export default {
  getAll,
};