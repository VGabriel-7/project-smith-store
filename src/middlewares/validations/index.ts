import Joi from 'joi';

const genericStr = (minString: number) => Joi.string().min(minString).required();

export default class Validations {
  public objectProd = Joi.object({
    name: genericStr(3),
    amount: genericStr(3),
  });

  public objectUser = Joi.object({
    username: genericStr(3),
    classe: genericStr(3),
    level: Joi.number().min(1).required(),
    password: genericStr(8),
  });

  public objectOrders = Joi.object({
    id: Joi.number(),
    productsIds: Joi.array().min(1).required(),
  });
}