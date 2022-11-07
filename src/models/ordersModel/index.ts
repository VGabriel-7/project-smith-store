import { RowDataPacket } from 'mysql2';
import { IOrders } from '../../Interfaces';
import mysql from '../connection';

export default class OdersModel {
  private connection = mysql;

  public async getAll(): Promise<IOrders[]> {
    const sqlFindAll = `SELECT orders.id, orders.userId, JSON_ARRAYAGG(products.id) AS productsIds
      FROM Trybesmith.Orders AS orders
      INNER JOIN Trybesmith.Products AS products
      ON products.orderId = orders.id GROUP BY orders.id;`;
    const [result] = await this.connection.execute<IOrders[] & RowDataPacket[]>(sqlFindAll);
    
    return result;
  }
}