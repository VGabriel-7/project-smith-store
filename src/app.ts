import express from 'express';
import routeProducts from './routes/products.router';
import routeUser from './routes/user.router';
import routeLogin from './routes/login.router';
import routeOrder from './routes/orders.router';
import httpErrorMiddleware from './middlewares/http.error.middleware';

const app = express();

app.use(express.json());

app.use('/orders', routeOrder);

app.use('/products', routeProducts);

app.use('/users', routeUser);

app.use('/login', routeLogin);

// middleware de erro
app.use(httpErrorMiddleware);

export default app;
