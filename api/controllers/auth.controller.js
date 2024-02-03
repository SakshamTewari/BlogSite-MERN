const newError = require('http-errors');
const User = require('../models/user.model');
async function signup(req, res){
        const { username, email, password } = req.body;

        if(!username || !email || !password)
            return res.status(404).json({message:'404, fields required'});
        
        const newUser = new User({
            username,
            email,
            password,
        });

        try{
            await newUser.save(); 
            res.json('SignUp successful');
        }
        catch(error){
            res.status(500).json({message: error.message});
        }
        

}

module.exports = {
    signup,
}