const express = require('express');
const mongoose = require('mongoose');

const config = require('./config');

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(config.getDbConnectionString());
app.use('/', express.static(`${__dirname}/public`));

app.listen(port);
console.log(`Listening on port: ${port}`);