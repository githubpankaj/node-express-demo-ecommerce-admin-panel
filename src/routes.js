const express = require('express');
const router = express.Router();
const userRouter = require('./modules/user/user.router');

// User management
router.use('/user', userRouter);