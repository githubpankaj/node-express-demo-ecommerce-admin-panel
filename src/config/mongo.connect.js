const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/ecommerce';

const connectResp = mongoose.connect(mongoURL);

module.exports = connectResp;