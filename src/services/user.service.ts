import { IJwt, ILogin, IUser, IUserLogin } from '../Interfaces';
import UserModel from '../models/userModel';

export default class ProductsService {
  public user = new UserModel();

  public async create(user: IUser): Promise<IJwt> {
    const userInserted = await this.user.create(user);

    return userInserted;
  }

  public async login(userLogin: IUserLogin): Promise<ILogin> {
    const login = await this.user.login(userLogin);

    return login;
  }
}