import Iorder from '../Interfaces/order.interface';
import connection from './connection';

const getOrders = async () => {
  const [orders] = await connection.execute(
    'SELECT * FROM Trybesmith.Orders',
  );

  return orders as Iorder[];
};

export default {
  getOrders,
};