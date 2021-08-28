const express = require('express');
const routes = require('./routes/index');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', routes);

module.exports = app;