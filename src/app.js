const express = require('express');
const app = express();
const router = express.Router();
const userRouter = require('./modules/user/user.router');
const productRouter = require('./modules/product/product.router');

app.use(express.json());

router.get('/', function(request, response){
  response.status(200).send('Welcome to Ecommerce API Service!').end();
});

// User management
router.use('/api/user', userRouter);

// Product management
router.use('/api/product', productRouter);

app.use(router);

module.exports = app;