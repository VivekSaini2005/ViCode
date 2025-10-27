require('dotenv').config({path:"../.env"});
const express = require("express");
const app = express();
const cookieParser =  require('cookie-parser');
const main = require("./config/database");
const authroute = require("./routes/userauth");
const redisclient = require("./config/redis_db");
const problemRouter = require("./routes/problem_creator");
const SubmissionRouter = require("./routes/submit_prob");
const cors = require('cors');
const aiRouter = require("./routes/aiChatting");
const videoRouter = require("./routes/videoCreator");

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true 
}))

app.use(express.json());
app.use(cookieParser());

app.use('/user',authroute);
app.use('/problem',problemRouter);
app.use('/submission',SubmissionRouter);
app.use('/ai',aiRouter);
app.use("/video",videoRouter);

const initial_connection = async ()=>{
    try{
        await Promise.all([main(),redisclient.connect()]);
        console.log("Connected to Database");
        app.listen(process.env.PORT,()=>{
            console.log("Server is listening at port no. "+process.env.PORT);
        })
    }
    catch(err){
        console.log("Error Occurred: "+err);
    } 
}

initial_connection();