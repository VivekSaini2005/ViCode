const validator = require("validator");

// data = req.body
const validate = (data)=>{
    const mandatory_field = ['firstName','emailId','password'];

    const is_allow = mandatory_field.every((k)=> Object.keys(data).includes(k));

    if(!is_allow)
        throw new Error("Some Field missing");

    if(!validator.isEmail(data.emailId))
        throw new Error("Invalid Email");

    if(!validator.isStrongPassword(data.password))
        throw new Error("Weak password");
}

module.exports = validate;