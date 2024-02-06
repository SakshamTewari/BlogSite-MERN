const newError = require('http-errors');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const {errorHandler} = require('../utils/error');
const jwt= require('jsonwebtoken');
const {JWT} = require('../config/vars');
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

async function signin(req, res , next){
    
    const {email, password} = req.body;
    
    if(!email || !password || email == '' || password == '')
        next(errorHandler(400, 'All fields are required'));

    try{
        const validUser = await User.findOne({email});

        if(!validUser)
           return next(errorHandler(404, 'User not found'));

        //bcrypt will compare hash('password') with saved hashedpassword 
        const validPassword = bcrypt.compareSync(password, validUser.password); 

        if(!validPassword)
            return next(errorHandler(400, 'Wrong Credentials')); //add return so that it doesn't go to next line

            const token = jwt.sign(
                {id: validUser._id},
                JWT.secret,
                //{expiresIn: 1} not using this as we want it for1 session only, till the browser is open
            );
            //We dont want to get password details from POST req, so we assign 'pass' to our 'password' value and get 'rest' of the properties using spread.
            //We now use 'rest' to get details
            //_doc has all the properties
            const {password: pass, ...rest} = validUser._doc;

            res.status(200).cookie('access_token', token, {
                httpOnly: true}).json(rest);  //validUser as we want to have it in Redux toolkit later
            
    }
    catch(error){
        next(error);
    }
}

module.exports = {
    signup,
    signin,
}