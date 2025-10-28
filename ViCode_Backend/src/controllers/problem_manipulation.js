const {get_lang_id,submit_batch,submit_token} = require("../utils/problemutilis");
const Problem = require("../models/problem_Schema");
const User = require("../models/user");
const Submission = require("../models/submission_Schema");
const SolutionVideo = require("../models/solutionVideo")

const create_problem = async (req,res)=>{
    const {title,description,difficulty,tags,visibleTestCases,hiddenTestCases,startCode,referenceSolution} = req.body;
    
    //check reference solution of given prob is correct or not.
    try{
        //we check for each language
        for(const {language,completeCode} of referenceSolution){

            //In JUDGE0 every lang has it's own ID so extract it.
            const languageId = get_lang_id(language);
            //Time to create batch submission format check on https://ce.judge0.com/#submissions-submission-batch-post
            const submission = visibleTestCases.map((testcase)=>({
                language_id : languageId,
                source_code : completeCode,
                stdin: testcase.input,
                expected_output: testcase.output
            }));
            // It give array something like "submissions": [{},{},{}] in which each object in array contains all four attriburtes.

            const submit_result = await submit_batch(submission);

            const token_result = submit_result.map((value)=>value.token);//all token mapped in array like [token1,token2,token3...(depends on visibletestcases)]

            const test_result = await submit_token(token_result);

            for(const test of test_result){
                if(test.status_id!=3){
                    return res.status(400).json({ 
                        message: "Reference solution failed test cases",
                        error: "One or more test cases did not pass with the provided reference solution"
                    });
                }
            }
        }

        // If all set then store problem in Database.
        const problemData = {
            title,
            description,
            difficulty,
            tags,
            visibleTestCases,
            hiddenTestCases,
            startCode,
            referenceSolution,
            problemCreator: req.result._id //yeah result user k middleware mei use ho raha hai... {user.result = result}
        };
        
        const userProblem = await Problem.create(problemData);
        res.status(201).json({ 
            message: "Problem Saved Successfully",
            problemId: userProblem._id
        });
    }
    catch(err){
        console.error(err);
        res.status(400).json({ message: err.message, stack: err.stack });
    }
}

const update_problem = async (req,res)=>{
    const {id} = req.params;
    const {title,description,difficulty,tags,visibleTestCases,hiddenTestCases,startCode,referenceSolution} = req.body;
    
    try{
        if(!id)
            return res.status(400).json({ message: "Problem Id Not found" });

        const DSA_Problem = await Problem.findById(id);
        if(!DSA_Problem) 
            return res.status(404).json({ message: "Problem not found in server" });

        //check for update is correct or not
        for(const {language,completeCode} of referenceSolution){

            //In JUDGE0 every lang has it's own ID so extract it.
            const languageId = get_lang_id(language);

            //Time to create batch submission format check on https://ce.judge0.com/#submissions-submission-batch-post
            const submission = visibleTestCases.map((testcase)=>({
                language_id : languageId,
                source_code : completeCode,
                stdin: testcase.input,
                expected_output: testcase.output
            }));
            // It give array something like "submissions": [{},{},{}] in which each object in array contains all four attriburtes.

            const submit_result = await submit_batch(submission);

            const token_result = submit_result.map((value)=>value.token);//all token mapped in array like [token1,token2,token3...(depends on visibletestcases)]

            const test_result = await submit_token(token_result);

            for(const result of test_result){
                if(result.status_id!=3){
                    return res.status(400).json({ 
                        message: "Reference solution failed test cases",
                        error: "One or more test cases did not pass with the provided reference solution"
                    });
                }
            }
        }

        const updateData = {
            title,
            description,
            difficulty,
            tags,
            visibleTestCases,
            hiddenTestCases,
            startCode,
            referenceSolution
        };
        
        const update_prob = await Problem.findByIdAndUpdate(id, updateData, {runValidators:true, new:true});
        res.status(200).json({ message: "Problem updated successfully", problem: update_prob });
    }
    catch(err){
        res.status(500).json({ message: "Error from problem_manipulation", error: err.message });
    }
}

const delete_problem = async (req,res)=>{
    const {id} = req.params;

    try{
        if(!id) 
            res.send("Id is missing for delete_problem");

        const del_prob = await Problem.findByIdAndDelete(id);
        if(!del_prob)
            res.send("Problem not found for delete");

        res.status(200).send("Problem deleted successfully");
    }
    catch(err){
        res.status(500).send("Error from problem_manipulation : "+err);
    }
}

const problem_by_id = async (req,res)=>{
    const {id} = req.params;
    try{
        if(!id)
            return res.status(400).send("Id not found to get problem");

        const problem_by_id = await Problem.findById(id);
        if(!problem_by_id)
            return res.send("Problem not found")

        //Video ko yahi le aao
        const videos = await SolutionVideo.findOne({problemId:id});
        if(videos){
            const responseData={
                ...problem_by_id.toObject(),
                secureUrl:videos.secureUrl,
                thumbnailUrl:videos.thumbnailUrl,
                duration:videos.duration,
            }
            // problem_by_id.secureUrl = videos.secureUrl;
            // problem_by_id.cloudinaryPublicId = videos.cloudinaryPublicId;
            // problem_by_id.thumbnailUrl = videos.thumbnailUrl;
            // problem_by_id.duration = videos.duration;
            return res.status(200).send(responseData);
        }
        res.status(200).send(problem_by_id); // jaruri nhi ki sabhi editorial mei video present ho
    }
    catch(err){
        res.status(500).send("Error from problem_manipulation : "+err);
    }
}

const get_all_problem = async(req,res)=>{
    try{
        const AllProblems = await Problem.find({}).select('_id title difficulty tags description ');//all problem stored in object.

        if(AllProblems.length==0)
            return res.status(400).send("Problems not found");

        res.status(200).send(AllProblems);
    }
    catch(err){
        res.status(500).send("Error from problem_manipulation : "+err);
    }
}

const solved_problem = async(req,res)=>{
    try{
        // const count = req.result.problemSolved.length;
        // res.status(200).send(count);
        // we want to print problem solved by user, so we aplly loop for user on problemSolved id
        // But it is not feasible method, bcz 1000 problem solved by user then we request 1000 times from backend.
        // So we use populate method.
        const user_id = req.result._id;
        const user = await User.findById(user_id).populate({
            path:'problemSolved',
            select:'_id title difficulty tags'
        })

        res.status(200).send(user.problemSolved);
    }
    catch(err){
        res.status(500).send("Error from problem_manipulation :"+err);
    }
}

const submitted_problem = async(req,res)=>{
    try{
        const userId = req.result._id;
        const problemId = req.params.id;

        const ans = await Submission.find({userId,problemId}).sort({createdAt: -1});
        if(ans.length==0)
            return res.status(200).json([]);

        res.status(200).json(ans);
    }
    catch(err){
        console.error("Error fetching submissions:", err);
        res.status(500).json({ error: "Failed to fetch submissions" });
    }
}
module.exports = {create_problem, update_problem, delete_problem, problem_by_id, get_all_problem, solved_problem,submitted_problem}