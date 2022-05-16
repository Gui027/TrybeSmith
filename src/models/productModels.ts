import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Iproduct from '../Interfaces/product.interface';

const getAll = async (): Promise<Iproduct[]> => {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );

  return products as Iproduct[];
};

const createProduct = async (name: string, amount: number): Promise<Iproduct> => {
  const [product] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
    [name, amount],
  );

  return {
    id: product.insertId,
    name,
    amount,
  };
};

export default {
  getAll,
  createProduct,
};