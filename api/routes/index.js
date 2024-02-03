const express = require('express');
const userRoute = require('./user.route');
const authRoute = require('./auth.route');
const router = express.Router();


//auth route
router.use('/auth', authRoute);

//user route
router.use('/user', userRoute);

module.exports = router;