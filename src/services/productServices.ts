import productModels from '../models/productModels';

const findAll = async () => {
  const allProducts = await productModels.getAll();
  return allProducts;
};

export default {
  findAll,
};