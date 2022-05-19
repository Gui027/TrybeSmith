import { Router } from 'express';
import productController from '../controllers/productController';
import productsValidations from '../middlewares/productsValidations';
import usersController from '../controllers/usersController';
import usersValidations from '../middlewares/usersValidations';
import ordersController from '../controllers/ordersController';

const routes = Router();

routes.get('/products', productController.displayAll);

routes.post(
  '/products',
  productsValidations.nameValidations,
  productsValidations.amountValidations,
  productController.newProduct,
);

routes.post(
  '/users',
  usersValidations.usernameValidations,
  usersValidations.classeValidations,
  usersValidations.levelValidations,
  usersValidations.passwordValidations,
  usersController.newUSer,
);

routes.get('/orders', ordersController.getAll);

export default routes;