import Iorder from '../Interfaces/order.interface';
import orderModels from '../models/orderModels';
import productModels from '../models/productModels';

const findOrders = async () => {
  const allOrders: Iorder[] = await orderModels.getOrders();
  const allProducts = await productModels.getAll();
  
  const arrayOfOrderWithProductId = allOrders.map((order) => {
    const productIds = allProducts.filter((product) => product.orderId === order.id)
      .map((filterProducts) => filterProducts.id);

    return {
      id: order.id,
      userId: order.userId,
      productsIds: productIds,
    };
  });
  
  return arrayOfOrderWithProductId;
};

export default {
  findOrders,
};