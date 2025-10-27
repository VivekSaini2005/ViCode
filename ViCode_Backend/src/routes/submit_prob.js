const express = require("express");
const SubmissionRouter = express.Router();
const usermiddleware = require("../middleware/usermiddleware");
const {submit_code,run_code} = require("../controllers/user_submission");


SubmissionRouter.post('/submit/:id',usermiddleware,submit_code);
SubmissionRouter.post('/run/:id',usermiddleware,run_code);

module.exports = SubmissionRouter;