import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const route = Router();

const orderController = new OrderController();

route.get('/', orderController.getAll.bind(orderController));

export default route;