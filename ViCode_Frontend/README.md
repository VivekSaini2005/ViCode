
Install vite from {https://vite.dev/guide/} step by step
Install DaisyUi vite option {https://daisyui.com/docs/install/vite/} and set step by step configuation.

Install Reach Hook form {npm install react-hook-form} from {https://www.npmjs.com/package/react-hook-form} 

Install zod as it give good validation then react-hook-form. npm i zod {https://zod.dev/} if we use zod then we have to install hook-form-resolver

Install hook-form-resolver npm i @hookform/resolvers {https://www.npmjs.com/package/@hookform/resolvers} 


At login or signup we call to backend, it give us token and to fetch profile info we also call to backend, so to reduce it when user/admin login/register we will send data also with message login successfully. As
res.status(201).json({  data should be in json format.
    user:reply,  //reply include what you want to send
    message:"Loggin Successfully"
})


npm monaco editor, automatic manipulate DOM

npm lucid react in admin.jsx in pages
create component folder and insert Adminpanel.jsx , admindelete.jsx, and submission history.jsx.


Some websites open the login page at first, how the backend knows he/she login or not, after getting data on register/login we set global variable(in store) isAuthenticated:true this means, if user again go to website then browser check isAuthenticated for login or not, but on closing tab this data erase bcz it runs on our ram.So every login we call backend for check, if user is real then we send token from backend.


We need store so npm react-redux, and npm axois  for making request, create utilis->axiosClient, authSlice, store->store.js, update store with main.jsx, useSelector in app.js as if user isAuthenticated then go to homepage else go to login/signup page. Dispatch in login and signup.


# axios
acts as an HTTP client, simplifying the process of making asynchronous HTTP requests (like GET, POST, PUT, DELETE) from both web browsers and Node.js environments to a server to fetch or send data
Automatic Data Transformation: Axios automatically converts JSON data sent by the server into JavaScript objects and can also transform JavaScript objects into JSON for sending to the server


CROS issue - occurs when port no. of backend and localhost of frontend not same to resolve it we install npm cors and edit index.js in backend.


google keep copy paste


# cloudinary
Public ID in Cloudinary?
Jab bhi tum Cloudinary pe koi image, video ya file upload karte ho, Cloudinary us file ko ek unique name deta hai —
yehi naam hota hai Public ID.

Public ID ka use Cloudinary ko ye batane ke liye hota hai ki:
"Bhai, kaunsi file chahiye?"

public id hme apne aap hi video_url, video_thumnail, video_lenght,...etc. yeah sab nikal deta hai.

backend mei kuch asa generate ho raha hoga
https://res.cloudinary.com/{cloud_name}/video/upload/{transformations}/{pubicId}.{format}
transformation use hota hai 240px, 360px, 720px,... inn sab k liye.

kitne route lagangea
jab upload kr rahe hoge tooh backend se getDigitalSignature();
jab video upload ho chuki hogi tooh uska metadata bhi store kerna padega saveMetaData();
jab video  delete krni ho delete/Id;

for users:
to see the video fetch();

index.js mei route, routes mei videoCreator.js, models mei solutionVideo, controllers mei videoSection


frontend mei admin admin.jsx mei jake ek card or banao wo hoga video add ya delete ka.
admindelete jaisa hi banana hai tooh adminVideo banao components mei, app.jsx mei route de do.
AdminVideo mei navigate kro upload pr click krne pr, app.jsx mei route banao AdminUpload ka or AdminUpload bhi bana do components mei.

Formdata ka use kro video upload krne k liye in AdminUpload.jsx

hum jab url generate kr rahe hai tooh version bhi dena padta hai, bhaut bar version change bhi hote hai

frontend mei problemPage mei jake editorial edit kro or components mei ek editorial bna do. userproblem mei bhi videos ko sahi se bhejna.



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
