const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const allowCors = (req, res, next) => {
    console.log("Came to cros");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X- Requested - With, Content - Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
};

mongoose.connect(config.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error connecting to the database'));
db.once('open', function () {
    console.log("Connection to the database successfully");
});

require('./models/Partner');

const index = express();
index.use(bodyParser.json());
index.use(bodyParser.urlencoded({ extended: false }));
index.use(allowCors);
index.use(config.ROOT_API + '/', require('./routes/homeRouter'));
index.use(config.ROOT_API + '/partner', require('./routes/partnerRouter'));
index.use(morgan('dev'));
index.listen((config.HOST), () => console.log('Started on port ' + config.HOST));