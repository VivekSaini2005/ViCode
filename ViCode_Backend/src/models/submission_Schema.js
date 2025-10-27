const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user', //'user' comes from   const User = mongoose.model("user",userSchema); 
        required: true
    },
    problemId: {
        type: Schema.Types.ObjectId,
        ref: 'problem', // 'problem' comes from   const Problem = mongoose.model('problem',problemSchema);
        required: true
    },
    code: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true,
        enum: ['javascript', 'c++', 'java'] 
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'wrong', 'error'],
        default: 'pending'
    },
    runtime: {
        type: Number,  // milliseconds
        default: 0
    },
    memory: {
        type: Number,  // kB
        default: 0
    },
    errorMessage: {
        type: String,
        default: ''
    },
    testCasesPassed: {
        type: Number,
        default: 0
    },
    testCasesTotal: {  // Recommended addition
        type: Number,
        default: 0
    }
},{
    timestamps: true
});

//store submission with userid for fast searching 
submissionSchema.index({userId:1 , problemId:1});// this store in B+ tree structue
// first arrange in acending order according to userId and then prblemId. -1 meaning in descending order.

const Submission = mongoose.model('submission',submissionSchema);

module.exports = Submission;