import { ResultSetHeader } from 'mysql2';
import { IJwt, IUser } from '../../Interfaces';
import mysql from '../connection';

export default class UserModel {
  private connection = mysql;

  public async create(user: IUser): Promise<IJwt> {
    const { username, classe, level, password } = user;

    const sqlCreate = `INSERT INTO Trybesmith.Users
      (username, classe, level, password) VALUES (?, ?, ?, ?)`;

    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>(sqlCreate, [username, classe, level, password]);

    return { id: insertId, username, classe, level };
  }
}