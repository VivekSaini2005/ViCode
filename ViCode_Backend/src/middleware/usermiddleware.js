const jwt = require("jsonwebtoken");
const User = require("../models/user");
const redisclient = require("../config/redis_db")

const usermiddleware = async (req,res,next)=>{
    try{
        const {token} = req.cookies;
        if(!token)
            throw new Error("Token is not present");

        const payload = jwt.verify(token,process.env.JWT_KEY);
        const {_id} = payload;
        if(!_id)
            throw new Error("Id not present");

        const result = await User.findOne({_id});
        if(!result)
            throw new Error("User doesn't exist");

        // Block in redis database
        const IsBlocked = await redisclient.exists(`token:${token}`);
        if(IsBlocked)
            throw new Error("Invalid Token")

        req.result = result;

        next();
    }
    catch(err){
        res.status(401).send("Error: "+err);
    }
}

module.exports = usermiddleware;