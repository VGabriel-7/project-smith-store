import { Request, Response, NextFunction } from 'express';
import Validations from './validations';

const validation = new Validations();

const validateOrder = (message: string, res: Response) => {
  if (message.includes('contain at least 1 items')) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  if (message.includes('is required')) {
    return res.status(400).json({ message });
  }
  if (message) {
    return res.status(422).json({ message });
  }
};

const validateBodyOrder = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { error } = validation.objectOrders.validate(req.body);

  if (error) {
    return validateOrder(error.message, res);
  }

  next();
};

export default validateBodyOrder;