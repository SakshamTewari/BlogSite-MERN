const path = require('path');

//Import .env variables

require('dotenv').config({
    path: path.join(__dirname, '../../.env' ),
});

module.exports = {
    mongo: {
        uri: process.env.MONGODB_URI,
    }
}