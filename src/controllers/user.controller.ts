import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { IJson } from '../Interfaces/index';
import { createToken } from '../utils/JWT';

export default class ProductsController {
  public user = new UserService();

  public async create(req: Request, res: Response): Promise<void> {
    const { body } = req;

    const userInserted = await this.user.create(body);

    const token = createToken(userInserted);

    res.status(201).json({ token });
  }

  public async login(req: Request, res: Response) {
    const { body } = req;

    const login = await this.user.login(body);

    if (!login) return res.status(401).json({ message: 'Username or password invalid' });

    const token = createToken(login);

    res.status(200).json({ token });
  }
}