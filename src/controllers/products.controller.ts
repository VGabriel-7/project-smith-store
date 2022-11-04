import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public products = new ProductsService();

  public async create(req: Request, res: Response) {
    const { body } = req;

    const productInserted = await this.products.create(body);

    res.status(201).json(productInserted);
  }
}