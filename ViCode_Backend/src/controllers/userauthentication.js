const validate = require("../utils/validator");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const redisclient = require("../config/redis_db");
const jwt = require("jsonwebtoken");


const register = async (req,res)=>{
    try{
        //validate the data
        validate(req.body);

        const {emailId,password} = req.body;

        const hash_password = await bcrypt.hash(password,10);
        req.body.password = hash_password;

        const user = await User.create(req.body);

        const token = jwt.sign({_id:user._id,emailId:emailId,role:'user'},process.env.JWT_KEY,{expiresIn: 60*60});//token expire in 3600 second means 1hour
        req.cookie('token',token,{maxAge: 60*60*1000});//maxAge milisecond mei rehta hai

        // res.status(201).send("User register successfully");
        const reply = {
            firstName: user.firstName,
            emailId: user.emailId,
            _id: user._id,
            role: user.role
        }
        res.status(201).json({
            user: reply,
            message: "Register Successfully"
        })

    }
    catch(err){
        res.status(400).send("Error: "+err);
    }
}
const login = async (req,res)=>{
    try{
        const {emailId,password} = req.body;
        if(!emailId)
            throw new Error("Invalid Credentials");
        if(!password)
            throw new Error("Invalid Credentials");

        const user = await User.findOne({emailId});

        const check_pass = await bcrypt.compare(password,user.password);
        if(!check_pass)
            throw new Error("Incorrect Credentials");

        const token = jwt.sign({_id:user._id,emailId:emailId,role:user.role},process.env.JWT_KEY,{expiresIn: 60*60});//token expire in 3600 second means 1hour
        res.cookie('token',token,{maxAge: 60*60*1000});//maxAge milisecond mei rehta hai

        // res.status(201).send("Logged in successfully");
        const reply = {
            firstName: user.firstName,
            emailId: user.emailId,
            _id: user._id,
            role: user.role
        }
        res.status(201).json({
            user: reply,
            message: "Logged in successfully"
        })        
    }
    catch(err){
        res.status(401).send("Error: "+err);
    }
}
const logout = async (req,res)=>{
    try{
        const {token} = req.cookies;
        const payload = jwt.decode(token);

        await redisclient.set(`token:${token}`,'Blocked');
        await redisclient.expireAt(`token:${token}`,payload.exp);

        res.cookie("token",null,{expires: new Date(Date.now())});
        res.send("Logged Out Succesfully");

    }
    catch(err){
        res.status(503).send("Error: "+err);
    }
}
const admin_register = async (req,res)=>{
    try{
        //validate the data
        validate(req.body);

        const {emailId,password} = req.body;

        const hash_password = await bcrypt.hash(password,10);
        req.body.password = hash_password;

        const user = await User.create(req.body);

        const token = jwt.sign({_id:user._id,emailId:emailId,role:user.role},process.env.JWT_KEY,{expiresIn: 60*60});//token expire in 3600 second means 1hour
        req.cookie('token',token,{maxAge: 60*60*1000});//maxAge milisecond mei rehta hai

        res.status(201).send("Admin register successfully");

    }
    catch(err){
        res.status(400).send("Error: "+err);
    }
}
const delete_profile = async (req,res)=>{
    try{
        const user_id = req.result._id;
        await User.findByIdAndDelete(user_id);

        //Also delete submission of user
        // await Submission.deleteMany({user_id});

        //To delete submission we use another method pre-post in user_schema, we use post in user_schema

        res.status(200).send("Profile delete successfully");
    }
    catch(err){
        res.status(500).send("Error from userauthentication :"+err)
    }
}
const check = async (req,res)=>{
    const reply = {
        firstName: req.result.firstName,
        emailId: req.result.emailId,
        _id: req.result._id,
        role: req.result.role
    }
    res.status(201).json({
        user: reply,
        message: "Valid User"
    })
}
module.exports = {register,login,logout,admin_register,delete_profile,check};