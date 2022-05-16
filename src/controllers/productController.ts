import { Request, Response } from 'express';
import productServices from '../services/productServices';

const displayAll = async (req: Request, res: Response): Promise<Response> => {
  const products = await productServices.findAll();
  return res.status(200).json(products);
};

const newProduct = async (req: Request, res: Response): Promise<Response> => {
  const { name, amount } = req.body;
  const productNew = await productServices.create(name, amount);
  return res.status(201).json(productNew); 
};

export default {
  displayAll,
  newProduct,
};