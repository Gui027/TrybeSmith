import { Router } from 'express';
import productController from '../controllers/productController';
import productsValidations from '../middlewares/productsValidations';
import usersController from '../controllers/usersController';
import usersValidations from '../middlewares/usersValidations';

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

export default routes;