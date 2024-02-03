const express = require('express');
const routes = require('../routes');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api', routes);


//error handler

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError.Unauthorized); // Use http-errors to create a 404 error
  });

app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message,
        status: err.status,
      },
    });
  });

module.exports = app;


