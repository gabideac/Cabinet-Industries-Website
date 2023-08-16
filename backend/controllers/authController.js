const User = require("../models/User.js");
const {createSecretToken} = require("../util/SecretToken.js");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
    try {
        const {username, password, isManager} = req.body;
        const existingUser = await User.findOne({username});
        if (existingUser){
            return res.json({message: "User already exists"})
        }
        const user = await User.create({username, password, isManager});
        const token = createSecretToken(user._id);
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        })
        res.status(201)
        .json({message: "User signed up successfully", success: true, user});
        next();
    } catch (error) {
        console.error(error);
    }
}

module.exports.Login = async(req, res, next) => {
    try {
        const {username, password} = req.body;
        if(!username || !password){
            return res.json({message: "All fields are required"})
        }
        
        const user = await User.findOne({username});
        if(!user){
            return res.json({message:"Incorect password or username"})
        }

        const auth = await bcrypt.compare(password, user.password)
        if(!auth){
            return res.json({message:"Incorect password or username"})
        }

        const token = createSecretToken(user._id);
        res.cookie("token", token ,{
            withCredentials: true,
            httpOnly: false,
        })
        
        .json({message: "User logged in successfully", success: true});
        next()
    }
    catch (error){
        console.error(error);
    }
}