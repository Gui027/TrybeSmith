import { Router } from 'express';
import productController from '../controllers/productController'; 

const routes = Router();

routes.get('/products', productController.displayAll);

export default routes;