import { Request, Response, NextFunction } from 'express';
import { validateTk } from '../utils/JWT';

const HTTP_UNAUTHORIZED = 401;

const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;
  // console.log(authorization);
  
  if (!authorization) {
    return res.status(HTTP_UNAUTHORIZED).json({ message: 'Token not found' });
  }
  
  try {
    const jwt = validateTk(authorization);
    
    req.body.id = jwt.id;

    next();
  } catch ({ message }) {
    return res.status(HTTP_UNAUTHORIZED).json({ message });
  }
};

export default validateToken;