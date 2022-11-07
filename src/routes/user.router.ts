import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateBodyUsers from '../middlewares/validateBodyUsers.middlewares';

const route = Router();

const userController = new UserController();

route.post('/', validateBodyUsers, userController.create.bind(userController));

export default route;