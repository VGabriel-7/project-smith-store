import { IOrders } from '../Interfaces';
import OrdersModel from '../models/ordersModel';

export default class ProductsService {
  public orders = new OrdersModel();

  public async getAll(): Promise<IOrders[]> {
    const getedOrders = await this.orders.getAll();

    return getedOrders;
  }
}