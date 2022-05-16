import { Router } from 'express';
import productController from '../controllers/productController';
import productsValidations from '../middlewares/productsValidations';

const routes = Router();

routes.get('/products', productController.displayAll);

routes.post(
  '/products',
  productsValidations.nameValidations,
  productsValidations.amountValidations,
  productController.newProduct,
);

export default routes;