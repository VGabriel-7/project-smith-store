import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { IJwt, IToken } from '../Interfaces';

dotenv.config();

export const createToken = (data: IJwt) => {
  const token = jwt.sign({ data }, String(process.env.JWT_SECRET), {
    expiresIn: '1d',
    algorithm: 'HS256',
  });

  return token;
};

export const validateTk = (token: string) => {
  try {
    const { data } = jwt.verify(token, String(process.env.JWT_SECRET)) as IToken;
    
    return data;
  } catch (error) {
    const err = new Error('Invalid token');
    err.message = 'Invalid token';
    throw err;
  }
};
