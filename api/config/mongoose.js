const mongoose = require('mongoose');
const {mongo, vars } = require('./vars');


// Exit application on error
mongoose.connection.on('error', (error) => {
    logger.error(`MongoDB connection error: ${error}`);
    process.exit(-1);
  });
  
  mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
  });
  
exports.connect = () => {
    mongoose.connect(mongo.uri).then(() => {
      console.log('mongoDB connected ....');
    });
    return mongoose.connection;
  };