import { Router } from 'express';
import OrderController from '../controllers/orders.controller';
import validateToken from '../middlewares/validateJWT.middlewares';
import validateBodyOrder from '../middlewares/validateBodyOrders.middlewares';

const route = Router();

const orderController = new OrderController();

route.get('/', orderController.getAll.bind(orderController));

route.post('/', validateToken, validateBodyOrder, orderController.create.bind(orderController));

export default route;