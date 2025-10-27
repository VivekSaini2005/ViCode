const express = require("express");
const authroute = express.Router();
const usermiddleware = require("../middleware/usermiddleware")
const {register,login,logout,admin_register,delete_profile,check} = require("../controllers/userauthentication")
const adminmiddleware = require("../middleware/adminmiddleware")


//Register, login, logout, getprofile

authroute.post('/register',register);
authroute.post('/login',login);
authroute.post('/logout',usermiddleware,logout);
authroute.post('/admin/register',adminmiddleware,admin_register);
authroute.delete('/deleteProfile',usermiddleware,delete_profile);
authroute.get('/check',usermiddleware,check);

// authroute.get('/getprofile',getprofile);

module.exports = authroute;