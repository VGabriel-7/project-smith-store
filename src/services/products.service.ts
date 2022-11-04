import { IProducts } from '../Interfaces';
import ProductsModel from '../models/productsModel';

export default class ProductsService {
  public products = new ProductsModel();

  public async create(products: IProducts): Promise<IProducts> {
    const productInserted = await this.products.create(products);

    return productInserted;
  }
}