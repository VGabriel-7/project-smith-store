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

export const validateToken = (token: string) => {
  try {
    const { payload } = jwt.verify(token, String(process.env.JWT_SECRET)) as IToken;

    return payload;
  } catch (error) {
    const err = new Error('Expired or invalid token');
    err.message = 'Expired or invalid token';
    throw err;
  }
};
