import { Request, Response } from 'express';
import productServices from '../services/productServices';

const displayAll = async (req: Request, res: Response) => {
  const products = await productServices.findAll();
  return res.status(200).json(products);
}; 

export default {
  displayAll,
};