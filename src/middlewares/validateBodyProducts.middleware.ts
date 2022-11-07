import { Request, Response, NextFunction } from 'express';
import object from './validations';

const validateBodyProducts = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { error } = object.validate(req.body);

  if (error && error.message.includes('is required')) {
    return res.status(400).json({ message: error.message });
  }
  if (error && error.message) {
    return res.status(422).json({ message: error.message });
  }

  next();
};

export default validateBodyProducts;