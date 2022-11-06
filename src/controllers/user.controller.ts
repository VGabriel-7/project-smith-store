import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { createToken } from '../utils/JWT';

export default class ProductsController {
  public user = new UserService();

  public async create(req: Request, res: Response): Promise<void> {
    const { body } = req;

    const userInserted = await this.user.create(body);

    const token = createToken(userInserted);

    res.status(201).json({ token });
  }
}