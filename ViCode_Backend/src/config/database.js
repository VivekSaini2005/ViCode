const mongoose = require("mongoose");

async function main(){
    await mongoose.connect(process.env.DATABASE_CONNECT_KEY);
}

module.exports = main;