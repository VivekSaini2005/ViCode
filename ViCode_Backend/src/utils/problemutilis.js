const axios = require('axios');

const submit_batch = async (submissions)=>{
    //this code present in judge0
    const options = {
        method: 'POST',
        url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
        params: {
            base64_encoded: 'false'
        },
        headers: {
            'x-rapidapi-key': '55fdf8d131msh5f256758b11ba71p19bdc8jsnf93bb70ff69e',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        data: {
            submissions
        }
    };


    async function fetch_data(){
        try {
            const response = await axios.request(options);
            return response.data;
        } 
        catch (error) {
            console.error(error);
        }
    }

    return await fetch_data();
}
//now we have array of token with saprated commas like this
//[token1,token2,token3...(depends on visibletestcases)]

const waiting = async(timer)=>{
  setTimeout(()=>{
    return 1;
  },timer);
}

//Time to check status_id for resubmission
const submit_token = async (result_token)=>{
    //get request occurs present on judge0
    const options = {
        method: 'GET',
        url: 'https://judge0-ce.p.rapidapi.com/submissions/batch',
        params: {
            tokens: result_token.join(","),
            base64_encoded: 'false',
            fields: '*'
        },
        headers: {
            'x-rapidapi-key': '55fdf8d131msh5f256758b11ba71p19bdc8jsnf93bb70ff69e',
            'x-rapidapi-host': 'judge0-ce.p.rapidapi.com'
        }
    };


    async function fetch_data(){
        try {
            const response = await axios.request(options);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    //fetch until get status_id > 2.
    while(true){
        const result = await fetch_data();

        const IsResultObtained =  result.submissions.every((r)=>r.status_id>2);

        if(IsResultObtained)
            return result.submissions;
        
        await waiting(1000);// give get request after 1 second.
    }
}

const get_lang_id = (language)=>{
    const lang = 
        {
            "assembly": 45,
            "bash": 46,
            "basic": 47,
            "c": 50,
            "c++": 54,
            "c#": 51,
            "common lisp": 55,
            "d": 56,
            "elixir": 57,
            "erlang": 58,
            "executable": 44,
            "fortran": 59,
            "go": 60,
            "haskell": 61,
            "java": 62,
            "javascript": 63,
            "lua": 64,
            "ocaml": 65,
            "octave": 66,
            "pascal": 67,
            "php": 68,
            "plain text": 43,
            "prolog": 69,
            "python": 71,
            "ruby": 72,
            "rust": 73,
            "typescript": 74
        }
    return lang[language.toLowerCase()];
}

module.exports = {get_lang_id,submit_batch,submit_token};