const newError = require('http-errors');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const {errorHandler} = require('../utils/error');
async function signup(req, res, next){
        const { username, email, password } = req.body;

        if(!username || !email || !password)
            next(errorHandler(400, 'All fields required'));
        
        const hashedPassword = bcrypt.hashSync(password,10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });
        // console.log(newUser);
        try{
            await newUser.save();
            res.json('SignUp successful');
        }
        catch(error){
            next(error);
        }
        

}

module.exports = {
    signup,
}