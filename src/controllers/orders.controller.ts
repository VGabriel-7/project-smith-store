import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class ProductsController {
  public orders = new OrderService();

  public async getAll(_req: Request, res: Response): Promise<void> {
    const getedOrders = await this.orders.getAll();

    res.status(200).json(getedOrders);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const { productsIds, id } = req.body;
    
    const insertedOrders = await this.orders.create(+id, productsIds);

    res.status(201).json(insertedOrders);
  }
}