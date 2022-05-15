import connection from './connection';

const getAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM Trybesmith.Products',
  );

  return products;
};

export default { getAll };