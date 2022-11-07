import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IInsertOrders, IOrders } from '../../Interfaces';
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

  public async create(id: number, productsIds: number[]): Promise<IInsertOrders> {
    const sqlInsert = 'INSERT INTO Trybesmith.Orders (userId) VALUES (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(sqlInsert, [id]);

    const sqlUpdate = `UPDATE Trybesmith.Products
    SET orderId = ?
    WHERE id = ?`;

    const promises = productsIds.map(async (num: number) =>
      this.connection.execute<ResultSetHeader>(sqlUpdate, [insertId, num]));
    
    await Promise.all(promises);
    
    return { userId: id, productsIds };
  }
}