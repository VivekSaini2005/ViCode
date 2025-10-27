const express = require('express');
const problemRouter =  express.Router();
const adminmiddleware = require("../middleware/adminmiddleware");
const {create_problem, update_problem, delete_problem, problem_by_id, get_all_problem, solved_problem, submitted_problem} = require("../controllers/problem_manipulation");
const usermiddleware = require("../middleware/usermiddleware");


// Create_problem, update_problem, delete_problem, problem_by_id, get_all_prob, solved_prob

problemRouter.post("/create",adminmiddleware,create_problem);
problemRouter.put("/update/:id",adminmiddleware, update_problem);
problemRouter.delete("/delete/:id",adminmiddleware, delete_problem);


problemRouter.get("/problemById/:id",usermiddleware, problem_by_id);
problemRouter.get("/allProblem",usermiddleware, get_all_problem);
problemRouter.get("/solvedByUser",usermiddleware, solved_problem);
problemRouter.get("/submissionProblem/:id",usermiddleware,submitted_problem);

module.exports = problemRouter;