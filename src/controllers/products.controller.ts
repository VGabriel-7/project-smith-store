import { Request, Response } from 'express';
import ProductsService from '../services/products.service';

export default class ProductsController {
  public products = new ProductsService();

  public async create(req: Request, res: Response): Promise<void> {
    const { body } = req;

    const productInserted = await this.products.create(body);

    res.status(201).json(productInserted);
  }

  public async getAll(_req: Request, res: Response): Promise<void> {
    const productInserted = await this.products.getAll();

    res.status(200).json(productInserted);
  }
}