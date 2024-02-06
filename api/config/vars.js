const path = require('path');

//Import .env variables
//if env is somewhere else, then also this will work

require('dotenv').config({
    path: path.join(__dirname, '../../.env' ),
});

module.exports = {
    mongo: {
        uri: process.env.MONGODB_URI,
    },
    JWT: {
        secret: process.env.JWT_SECRET,
    },

}