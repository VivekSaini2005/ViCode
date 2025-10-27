const Problem = require("../models/problem_Schema");
const Submission = require("../models/submission_Schema");
const User = require("../models/user");
const {get_lang_id,submit_batch,submit_token} = require("../utils/problemutilis");

const submit_code = async(req,res)=>{
    try{
        const user_id = req.result._id;

        const prob_id = req.params.id;

        let {code,language} = req.body;

        if(!user_id || !prob_id || !code || !language)
            return res.status(400).send("Missing fields");

        if(language === 'cpp' || language === 'C++'  || language === 'Cpp') language = 'c++';
        //Extract the problem
        const prob = await Problem.findById(prob_id);

        //first store info in database, it doesn't matter code is correct or not.
        const submitted_result = await Submission.create({
            userId: user_id,
            problemId: prob_id,
            code, // code: code, both same, write one no issue.
            language,
            status:'pending',
            testCasesTotal:prob.hiddenTestCases.length
        })

        // Time to submit code to JUDGE0
        const lang_id = get_lang_id(language.toLowerCase());

        const submission = prob.hiddenTestCases.map((testcase)=>({
            language_id : lang_id,
            source_code : code,
            stdin: testcase.input,
            expected_output: testcase.output
        }));

        const submit_result = await submit_batch(submission);

        const token_result = submit_result.map((value)=>value.token);

        const test_result = await submit_token(token_result); //How test_result look like see in last of code.

        //Time to update the that submission which we did before run the code over testcases.
        let testCasesPassed = 0;
        let runtime = 0;
        let memory = 0;
        let status = 'accepted';
        let errorMessage = null;

        for(const test of test_result){
            if(test.status_id==3){
                testCasesPassed++;
                runtime = runtime+parseFloat(test.time);//time is in string format change in float
                memory = Math.max(memory,test.memory);//memory is in int format.
            }
            else{
                if(test.status_id==4){
                    status = 'error';
                    errorMessage = test.stderr
                }
                else{
                    status = 'wrong';
                    errorMessage = test.stderr
                }
            }
        }

        submitted_result.testCasesPassed = testCasesPassed;
        submitted_result.runtime = runtime;
        submitted_result.memory = memory;
        submitted_result.status = status;
        submitted_result.errorMessage = errorMessage;

        await submitted_result.save();// isse save ho jayga.

        //How much problem solved by user, to show it we put this solved problem into problemSolved of userSchema
        //first check question present or not, if not store it else ignore.
        // we know req.result = user info 
        // if(!req.result.problemSolved.includes(prob_id)){
        //     req.result.problemSolved.push(prob_id);
        //     await req.result.save(); // to understand .save see below the code
        // } 

        await User.updateOne(
            { _id: req.result._id },
            { $addToSet: { problemSolved: prob_id } } // automatically prevents duplicates
        );


        const accepted = (status==='accepted');
        res.status(201).json({
            accepted,
            totalTestCases: submitted_result.testCasesTotal,
            passedTestCases: testCasesPassed,
            runtime,
            memory
        });
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
}

const run_code = async(req,res)=>{
    try{
        const user_id = req.result._id;

        const prob_id = req.params.id;

        let {code,language} = req.body;

        if(!user_id || !prob_id || !code || !language)
            return res.status(400).send("Missing fields");

        if(language === 'cpp' || language === 'C++' || language === 'Cpp') language = 'c++';
        //Extract the problem
        const prob = await Problem.findById(prob_id);

        // Time to submit code to JUDGE0
        const lang_id = get_lang_id(language.toLowerCase());

        const submission = prob.visibleTestCases.map((testcase)=>({
            language_id : lang_id,
            source_code : code,
            stdin: testcase.input,
            expected_output: testcase.output
        }));

        const submit_result = await submit_batch(submission);

        const token_result = submit_result.map((value)=>value.token);

        const test_result = await submit_token(token_result); //How test_result look like see in last of code.


        let testCasesPassed = 0;
        let runtime = 0;
        let memory = 0;
        let status = true;
        let errorMessage = null;

        for(const test of test_result){
            if(test.status_id==3){
            testCasesPassed++;
            runtime = runtime+parseFloat(test.time)
            memory = Math.max(memory,test.memory);
            }
            else{
                if(test.status_id==4){
                    status = false
                    errorMessage = test.stderr
                }
                else{
                    status = false
                    errorMessage = test.stderr
                }
            }
        }

   
  
        res.status(201).json({
            success:status,
            testCases: test_result,
            runtime,
            memory
        });
        
    }
    catch(err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
}

module.exports = {submit_code,run_code};

//     language_id: 54,
//     stdin: '2 3',
//     expected_output: '5',
//     stdout: '5',
//     status_id: 3,
//     created_at: '2025-05-12T16:47:37.239Z',
//     finished_at: '2025-05-12T16:47:37.695Z',
//     time: '0.002',
//     memory: 904,
//     stderr: null,
//     token: '611405fa-4f31-44a6-99c8-6f407bc14e73',


// User.findByIdUpdate({}), this take two steps first find by id and then update , at last it save the data.
// const user =  User.findById(id)
// user.firstName = "Mohit";
// await user.save();