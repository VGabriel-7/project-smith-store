import { Router } from 'express';
import UserController from '../controllers/user.controller';
import validateLogin from '../middlewares/validateLogin.middleware';

const route = Router();

const userController = new UserController();

route.post('/', validateLogin, userController.login.bind(userController));

export default route;