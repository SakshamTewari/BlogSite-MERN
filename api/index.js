const app = require('../api/config/express');
const mongoose = require('./config/mongoose');

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})


