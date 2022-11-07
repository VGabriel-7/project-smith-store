import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IJwt, IUser, IUserLogin, ILogin } from '../../Interfaces';
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

  public async login(userLogin: IUserLogin): Promise<ILogin> {
    const { username, password } = userLogin;

    const sqlFindUser = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';

    const [[result]] = await
    this.connection.execute<ILogin[] & RowDataPacket[]>(sqlFindUser, [username, password]);

    return result;
  }
}