import { ResultSetHeader } from 'mysql2';
import { IProducts } from '../../Interfaces';
import mysql from '../connection';

export default class ProductsModel {
  private connection = mysql;

  public async create(products: IProducts): Promise<IProducts> {
    const { name, amount } = products;

    const sqlCreate = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';

    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(sqlCreate, [name, amount]);

    return { id: insertId, ...products };
  }
}