import { Request, Response, NextFunction } from 'express';
import Validations from './validations';

const validation = new Validations();

const validateBodyProducts = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { error } = validation.objectProd.validate(req.body);

  if (error && error.message.includes('is required')) {
    return res.status(400).json({ message: error.message });
  }
  if (error && error.message) {
    return res.status(422).json({ message: error.message });
  }

  next();
};

export default validateBodyProducts;