import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const route = Router();

const productsController = new ProductsController();

route.post('/', productsController.create.bind(productsController));

route.get('/', productsController.getAll.bind(productsController));

export default route;