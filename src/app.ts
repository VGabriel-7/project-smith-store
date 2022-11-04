import express from 'express';
import routeProducts from './routes/products.router';
import httpErrorMiddleware from './middlewares/http.error.middleware';

const app = express();

app.use(express.json());

app.use('/products', routeProducts);

// middleware de erro
app.use(httpErrorMiddleware);

export default app;
