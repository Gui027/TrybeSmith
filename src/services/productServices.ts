import Iproduct from '../Interfaces/product.interface';
import productModels from '../models/productModels';

const findAll = async (): Promise<Iproduct[]> => {
  const allProducts = await productModels.getAll();
  return allProducts as Iproduct[];
};

const create = async (name: string, amount: number): Promise<Iproduct> => {
  const createProduct = await productModels.createProduct(name, amount);
  return createProduct;
};

export default {
  findAll,
  create,
};