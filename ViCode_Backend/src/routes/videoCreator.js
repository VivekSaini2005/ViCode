const express = require('express');
const adminmiddleware = require('../middleware/adminmiddleware');
const videoRouter =  express.Router();
const {generateUploadSignature,saveVideoMetadata,deleteVideo} = require("../controllers/videoSection")

videoRouter.get("/create/:problemId",adminmiddleware,generateUploadSignature);
videoRouter.post("/save",adminmiddleware,saveVideoMetadata);
videoRouter.delete("/delete/:problemId",adminmiddleware,deleteVideo);


module.exports = videoRouter;