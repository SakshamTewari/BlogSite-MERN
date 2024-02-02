const express = require('express');
const routes = require('../routes');

const app = express();

//routes
app.use('/api', routes);

module.exports = app;


