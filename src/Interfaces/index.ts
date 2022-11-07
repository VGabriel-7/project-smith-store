export interface IProducts {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface IUser {
  username: string;
  classe: string;
  level: number;
  password?: string;
}

export interface ILogin extends IUser {
  id: number
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IJson {
  message: string;
}

export interface IJwt {
  id: number;
  username: string;
  classe: string;
  level: number;
}

export interface IToken {
  payload: {
    id: number;
    name: string;
    email: string;
    password: string;
  };
  iat: number;
  exp: number;
}

export interface IOrders {
  id: number;
  userId: number;
  productsIds: number[];
}
