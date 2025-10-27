
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



# ViCode - Coding Platform

A comprehensive coding platform with problem-solving capabilities, AI assistance, and video solutions.

## 🚀 Recent Updates & Features

### ✅ **Code Editor Fixes**
- **Fixed Start Code Display**: Resolved issue where initial code wasn't showing in the Monaco editor
- **Language Consistency**: Updated language matching logic to handle all variations (C++, Java, JavaScript)
- **Smooth Animations**: Added fade-in and slide-in animations for better user experience

### ✅ **ChatAI Enhancements**
- **Typewriter Effect**: Implemented ChatGPT-like typewriter animation for AI responses
- **Smooth Streaming**: Added character-by-character text animation with blinking cursor
- **Enhanced UX**: Improved loading states with bouncing dots and smooth transitions
- **Auto-scroll**: Automatically follows typing animation for better readability

### ✅ **Video Upload System**
- **Duplicate Prevention**: Fixed issue where same video could be uploaded multiple times
- **Automatic Replacement**: New videos automatically replace old ones for the same problem
- **Better Feedback**: Enhanced user notifications for upload success/replacement
- **Database Cleanup**: Automatic cleanup of old videos from Cloudinary and database

### ✅ **Submission History**
- **Complete Implementation**: Fixed submission history display in the submissions tab
- **Real-time Updates**: Shows all user submissions with status, runtime, and memory usage
- **Code Viewer**: Modal to view submitted code with syntax highlighting
- **Smooth Animations**: Staggered animations for submission entries

### ✅ **Database Standardization**
- **Language Consistency**: Created scripts to standardize language naming across database
- **Update Scripts**: Provided both Node.js and MongoDB shell scripts for database updates
- **Error Handling**: Improved error handling and response formatting

## 🛠️ Technical Improvements

### Frontend Enhancements
- **Smooth Animations**: Added custom CSS animations for better user experience
- **Responsive Design**: Improved mobile and desktop compatibility
- **Error Handling**: Better error states and user feedback
- **Performance**: Optimized re-renders and memory management

### Backend Improvements
- **API Consistency**: Fixed endpoint mismatches and response formats
- **Error Handling**: Enhanced error messages and status codes
- **Data Validation**: Improved input validation and sanitization
- **Database Queries**: Optimized queries with proper sorting and indexing

## 📁 Project Structure

```
ViCode_Frontend/
├── src/
│   ├── components/
│   │   ├── ChatAi.jsx          # AI chat with typewriter effect
│   │   ├── SubmissionHistory.jsx # Submission history display
│   │   ├── AdminUpload.jsx      # Video upload with duplicate prevention
│   │   └── ...
│   ├── pages/
│   │   ├── Problempage.jsx     # Main problem page with editor
│   │   └── ...
│   ├── index.css               # Custom animations and styles
│   └── ...

ViCode_Backend/
├── src/
│   ├── controllers/
│   │   ├── videoSection.js     # Video upload/delete logic
│   │   ├── user_submission.js  # Code submission handling
│   │   └── ...
│   ├── models/
│   │   ├── solutionVideo.js    # Video schema
│   │   ├── submission_Schema.js # Submission schema
│   │   └── ...
│   ├── database_update_script.js # Language standardization
│   └── ...
```

## 🎯 Key Features

### 1. **Smart Code Editor**
- Monaco Editor with syntax highlighting
- Language switching (C++, Java, JavaScript)
- Real-time code execution and testing
- Smooth animations and transitions

### 2. **AI-Powered Chat**
- ChatGPT-like typewriter responses
- Problem-specific context awareness
- Smooth streaming animations
- Auto-scroll during typing

### 3. **Video Solutions**
- Cloudinary integration for video storage
- Automatic duplicate prevention
- Thumbnail generation
- Admin upload/delete functionality

### 4. **Submission Management**
- Complete submission history
- Status tracking (Accepted, Wrong Answer, Error)
- Runtime and memory usage display
- Code viewing with syntax highlighting

## 🔧 Installation & Setup

### Frontend Setup
```bash
cd ViCode_Frontend
npm install
npm run dev
```

### Backend Setup
```bash
cd ViCode_Backend
npm install
npm start
```

### Database Updates
To standardize language naming:
```bash
# Option 1: Node.js script
node database_update_script.js

# Option 2: MongoDB shell
mongosh your-database-name < mongodb_update_script.js
```

## 🎨 Animation System

### Custom CSS Animations
- `animate-fadeIn`: Smooth fade-in effect
- `animate-slideIn`: Slide-in from left
- `animate-slideUp`: Slide-up from bottom
- `animate-typewriterCursor`: Blinking cursor animation
- `animate-messageSlideIn`: Message appearance effect

### Usage
```css
.element {
  animation: fadeIn 0.3s ease-out;
}
```

## 🚀 Performance Optimizations

- **Efficient Re-renders**: Only animates necessary components
- **Memory Management**: Proper cleanup of intervals and timers
- **Smooth Scrolling**: Native smooth scrolling implementation
- **Responsive Design**: Optimized for all screen sizes

## 📝 API Endpoints

### Submissions
- `GET /problem/submissionProblem/:id` - Get user submissions for a problem
- `POST /submission/submit/:id` - Submit code for evaluation
- `POST /submission/run/:id` - Run code with test cases

### Videos
- `GET /video/create/:problemId` - Get upload signature
- `POST /video/save` - Save video metadata
- `DELETE /video/:problemId` - Delete video

### AI Chat
- `POST /ai/chat` - Send message to AI assistant

## 🔄 Recent Bug Fixes

1. **Start Code Not Showing**: Fixed language matching logic
2. **Duplicate Video Uploads**: Implemented automatic replacement
3. **Submission History Empty**: Fixed API endpoint mismatch
4. **ChatAI Instant Appearance**: Added smooth typewriter animation
5. **Database Inconsistency**: Created standardization scripts

## 🎯 Future Enhancements

- [ ] Real-time collaboration features
- [ ] Advanced code analysis
- [ ] Performance benchmarking
- [ ] Social features and leaderboards
- [ ] Mobile app development

---

## 📚 Dependencies

### Frontend
- React + Vite
- DaisyUI + Tailwind CSS
- Monaco Editor
- React Hook Form
- Axios
- Lucide React

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Cloudinary
- Judge0 API
- CORS

---

*Last Updated: January 2025*
