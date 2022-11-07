import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import validateBodyProducts from '../middlewares/validateBodyProducts.middleware';

const route = Router();

const productsController = new ProductsController();

route.post('/', validateBodyProducts, productsController.create.bind(productsController));

route.get('/', productsController.getAll.bind(productsController));

export default route;