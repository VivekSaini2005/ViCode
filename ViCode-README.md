# ViCode - Online Collaborative Code Editor

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Data Flow](#data-flow)
- [Installation & Setup](#installation--setup)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [API Endpoints](#api-endpoints)
- [Why ViCode](#why-vicode)
- [Use Cases](#use-cases)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

---

## 🎯 Overview

**ViCode** is a modern, web-based collaborative code editor designed for remote software development teams and individual developers. It provides a powerful platform for writing, compiling, executing, and sharing code in real-time across multiple programming languages.

The project enables developers to:
- **Write code collaboratively** in real-time with team members
- **Compile and execute** code across various programming languages
- **Share code instantly** using live sessions with unique room IDs
- **Debug efficiently** with integrated error suggestions and syntax highlighting
- **Access from anywhere** - fully browser-based, no installation required

---

## ✨ Features

### 🔴 Core Features
1. **Multi-Language Support**
   - Supports 20+ programming languages including Python, JavaScript, C++, Java, Go, Rust, and more
   - Syntax highlighting and code intelligence for all supported languages

2. **Real-Time Collaboration**
   - Live code sharing with multiple users
   - Real-time cursor tracking and user presence
   - Collaborative editing with instant synchronization
   - WebSocket-based bidirectional communication

3. **Online Code Compilation & Execution**
   - Instant code compilation without local setup
   - Real-time output display
   - Support for standard input/output
   - Execution time and memory usage tracking

4. **AI-Powered Error Suggestions**
   - Intelligent error detection and suggestions
   - Code optimization recommendations
   - Syntax error highlighting with quick fixes

5. **Code Sharing**
   - Generate unique shareable links for code snippets
   - Room-based collaboration with access control
   - Session management and persistence

6. **Modern Code Editor**
   - Monaco Editor integration (VS Code editor core)
   - IntelliSense and autocomplete
   - Multiple themes (light/dark mode)
   - Customizable editor settings
   - Keyboard shortcuts and vim mode support

### 🎨 Additional Features
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **User Authentication**: Secure login and session management
- **Code History**: Save and retrieve previous code sessions
- **Export/Import**: Download code files or import existing projects
- **Terminal Emulation**: Interactive terminal for command execution

---

## 🛠️ Technology Stack

### **Frontend**
- **React.js** (v18.x) - UI component library
- **JavaScript/TypeScript** - Primary programming languages
- **Monaco Editor** - Code editor component (VS Code core)
- **Socket.io-client** - Real-time bidirectional communication
- **Axios** - HTTP client for API requests
- **React Router** - Client-side routing
- **CSS3/Tailwind CSS** - Styling and responsive design
- **Vite** - Build tool and development server

### **Backend**
- **Node.js** (v18.x+) - Runtime environment
- **Express.js** (v4.x) - Web application framework
- **Socket.io** - WebSocket server for real-time features
- **Judge0 API / Piston API** - Code compilation and execution
- **MongoDB** - Database for storing user data and code sessions
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication and authorization
- **bcrypt** - Password hashing
- **dotenv** - Environment variable management

### **Additional Technologies**
- **Redis** - Session management and caching
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Morgan** - HTTP request logger
- **Nodemon** - Development auto-restart

### **Deployment**
- **Frontend**: Netlify / Vercel
- **Backend**: Heroku / Railway / Render
- **Database**: MongoDB Atlas

---

## 🏗️ Project Architecture

ViCode follows a **Client-Server Architecture** with real-time communication capabilities:

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT SIDE                          │
├─────────────────────────────────────────────────────────────┤
│  React Components                                            │
│  ├── Editor Component (Monaco Editor)                       │
│  ├── Terminal Component                                      │
│  ├── Collaboration Panel                                     │
│  ├── Output Display                                          │
│  └── Settings & Configuration                                │
│                                                              │
│  State Management (React Context / Redux)                   │
│  Socket.io Client (Real-time Communication)                 │
│  API Service Layer (Axios)                                   │
└──────────────────┬──────────────────────────────────────────┘
                   │
                   │ HTTP/HTTPS + WebSocket
                   │
┌──────────────────▼──────────────────────────────────────────┐
│                         SERVER SIDE                          │
├─────────────────────────────────────────────────────────────┤
│  Express.js REST API                                         │
│  ├── Authentication Routes                                   │
│  ├── Code Execution Routes                                   │
│  ├── Room Management Routes                                  │
│  └── User Management Routes                                  │
│                                                              │
│  Socket.io Server (Real-time Collaboration)                 │
│  ├── Room Management                                         │
│  ├── Code Synchronization                                    │
│  ├── Cursor Tracking                                         │
│  └── User Presence                                           │
│                                                              │
│  Middleware Layer                                            │
│  ├── Authentication (JWT)                                    │
│  ├── Error Handling                                          │
│  ├── Request Validation                                      │
│  └── Rate Limiting                                           │
└──────────────────┬──────────────────────────────────────────┘
                   │
        ┌──────────┴──────────┬─────────────────┐
        │                     │                  │
┌───────▼────────┐  ┌─────────▼────────┐ ┌──────▼──────────┐
│   MongoDB      │  │  Code Execution  │ │     Redis       │
│   Database     │  │  Service         │ │     Cache       │
│                │  │  (Judge0/Piston) │ │                 │
│  - Users       │  │                  │ │  - Sessions     │
│  - Rooms       │  └──────────────────┘ │  - Rate Limits  │
│  - Code        │                        │  - Active Rooms │
│    Snippets    │                        └─────────────────┘
└────────────────┘
```

### Architecture Layers

1. **Presentation Layer (Frontend)**
   - User interface components
   - Real-time editor and terminal
   - Client-side state management
   - WebSocket client for collaboration

2. **Application Layer (Backend API)**
   - RESTful API endpoints
   - Business logic implementation
   - Request/response handling
   - Authentication and authorization

3. **Real-Time Communication Layer**
   - WebSocket server (Socket.io)
   - Room-based broadcasting
   - Event-driven architecture
   - Collaborative features

4. **Data Layer**
   - MongoDB for persistent storage
   - Redis for caching and sessions
   - External code execution APIs

---

## 🔄 Data Flow

### 1. **User Authentication Flow**
```
User → Login Form → Backend API → JWT Token Generation
                                 ↓
                          Store in localStorage/Cookie
                                 ↓
                          Include in API Headers
```

### 2. **Real-Time Collaboration Flow**
```
User A Types Code
    ↓
Browser captures keystroke
    ↓
Socket.io emits 'code-change' event
    ↓
Server receives event
    ↓
Server broadcasts to all users in room (except sender)
    ↓
User B, C, D receive 'code-change' event
    ↓
Their editors update automatically
```

### 3. **Code Execution Flow**
```
User clicks "Run Code"
    ↓
Frontend sends POST request to /api/execute
    ↓
Backend validates request
    ↓
Backend calls Code Execution API (Judge0/Piston)
    │
    ├── Language ID
    ├── Source Code
    ├── Input (if any)
    └── Compiler Options
    ↓
Code Execution API compiles & runs code
    ↓
Returns output/errors/execution time
    ↓
Backend processes response
    ↓
Frontend displays output in terminal
```

### 4. **Room/Session Management Flow**
```
User creates room
    ↓
Backend generates unique room ID
    ↓
Store room in MongoDB + Redis
    ↓
Return room ID to user
    ↓
User shares room link with collaborators
    ↓
Collaborators join via room ID
    ↓
Socket.io connects all users to same namespace/room
    ↓
All actions synchronized in real-time
```

---

## 📦 Installation & Setup

### Prerequisites
- **Node.js** (v18.x or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or Atlas)
- **Redis** (optional, for caching)
- **Git**

### Backend Setup

1. **Clone the repository**
```bash
git clone https://github.com/VivekSaini2005/ViCode.git
cd ViCode
```

2. **Navigate to backend directory**
```bash
cd backend
# or if structure is different
cd server
```

3. **Install dependencies**
```bash
npm install
```

4. **Configure environment variables**
Create a `.env` file in the backend root:
```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/vicode
# or for MongoDB Atlas
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/vicode

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Code Execution API
CODE_EXEC_API=https://api.judge0.com
CODE_EXEC_API_KEY=your_judge0_api_key
# or
PISTON_API_URL=https://emkc.org/api/v2/piston

# Redis Configuration (optional)
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# CORS Configuration
CLIENT_URL=http://localhost:5173

# OpenAI API (for error suggestions)
OPENAI_API_KEY=your_openai_api_key
```

5. **Start the backend server**
```bash
# Development mode
npm run dev

# Production mode
npm start
```

Backend will run on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
```bash
cd ../frontend
# or
cd client
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Create a `.env` file in the frontend root:
```env
# API Configuration
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000

# Environment
VITE_NODE_ENV=development
```

4. **Start the development server**
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

### Access the Application
Open your browser and navigate to:
```
http://localhost:5173
```

---

## 📁 Project Structure

```
ViCode/
│
├── frontend/                    # React frontend application
│   ├── public/                  # Static assets
│   │   ├── index.html
│   │   ├── favicon.ico
│   │   └── assets/
│   │
│   ├── src/
│   │   ├── components/          # Reusable React components
│   │   │   ├── Editor/          # Code editor component
│   │   │   │   ├── Editor.jsx
│   │   │   │   ├── EditorSettings.jsx
│   │   │   │   └── LanguageSelector.jsx
│   │   │   │
│   │   │   ├── Terminal/        # Terminal output component
│   │   │   │   ├── Terminal.jsx
│   │   │   │   └── Output.jsx
│   │   │   │
│   │   │   ├── Collaboration/   # Real-time collaboration
│   │   │   │   ├── RoomManager.jsx
│   │   │   │   ├── UserList.jsx
│   │   │   │   └── CursorDisplay.jsx
│   │   │   │
│   │   │   ├── Auth/            # Authentication components
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── ProtectedRoute.jsx
│   │   │   │
│   │   │   └── Common/          # Shared components
│   │   │       ├── Navbar.jsx
│   │   │       ├── Sidebar.jsx
│   │   │       ├── Button.jsx
│   │   │       └── Modal.jsx
│   │   │
│   │   ├── pages/               # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── EditorPage.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── context/             # React Context API
│   │   │   ├── AuthContext.jsx
│   │   │   ├── EditorContext.jsx
│   │   │   └── SocketContext.jsx
│   │   │
│   │   ├── hooks/               # Custom React hooks
│   │   │   ├── useAuth.js
│   │   │   ├── useSocket.js
│   │   │   ├── useEditor.js
│   │   │   └── useDebounce.js
│   │   │
│   │   ├── services/            # API service layer
│   │   │   ├── api.js           # Axios instance
│   │   │   ├── authService.js
│   │   │   ├── codeService.js
│   │   │   ├── roomService.js
│   │   │   └── socketService.js
│   │   │
│   │   ├── utils/               # Utility functions
│   │   │   ├── constants.js     # Language configs, themes
│   │   │   ├── helpers.js
│   │   │   └── validators.js
│   │   │
│   │   ├── styles/              # CSS/SCSS files
│   │   │   ├── global.css
│   │   │   ├── editor.css
│   │   │   └── themes.css
│   │   │
│   │   ├── App.jsx              # Root component
│   │   ├── main.jsx             # Entry point
│   │   └── routes.jsx           # Route configuration
│   │
│   ├── .env                     # Environment variables
│   ├── .env.example             # Environment template
│   ├── .gitignore
│   ├── package.json             # Frontend dependencies
│   ├── vite.config.js           # Vite configuration
│   └── README.md
│
├── backend/                     # Node.js backend application
│   ├── src/
│   │   ├── controllers/         # Request handlers
│   │   │   ├── authController.js
│   │   │   ├── codeController.js
│   │   │   ├── roomController.js
│   │   │   └── userController.js
│   │   │
│   │   ├── models/              # Database models (Mongoose)
│   │   │   ├── User.js
│   │   │   ├── Room.js
│   │   │   ├── CodeSnippet.js
│   │   │   └── Session.js
│   │   │
│   │   ├── routes/              # API routes
│   │   │   ├── index.js         # Route aggregator
│   │   │   ├── authRoutes.js
│   │   │   ├── codeRoutes.js
│   │   │   ├── roomRoutes.js
│   │   │   └── userRoutes.js
│   │   │
│   │   ├── middleware/          # Express middleware
│   │   │   ├── authMiddleware.js
│   │   │   ├── errorHandler.js
│   │   │   ├── validateRequest.js
│   │   │   └── rateLimiter.js
│   │   │
│   │   ├── services/            # Business logic
│   │   │   ├── codeExecutionService.js
│   │   │   ├── roomService.js
│   │   │   ├── authService.js
│   │   │   └── aiService.js
│   │   │
│   │   ├── socket/              # Socket.io configuration
│   │   │   ├── socketHandler.js
│   │   │   ├── roomHandler.js
│   │   │   └── codeHandler.js
│   │   │
│   │   ├── config/              # Configuration files
│   │   │   ├── database.js      # MongoDB connection
│   │   │   ├── redis.js         # Redis connection
│   │   │   └── languages.js     # Language configurations
│   │   │
│   │   ├── utils/               # Utility functions
│   │   │   ├── logger.js
│   │   │   ├── validators.js
│   │   │   └── helpers.js
│   │   │
│   │   └── app.js               # Express app setup
│   │
│   ├── .env                     # Environment variables
│   ├── .env.example             # Environment template
│   ├── .gitignore
│   ├── package.json             # Backend dependencies
│   ├── server.js                # Server entry point
│   └── README.md
│
├── .gitignore                   # Global gitignore
├── README.md                    # Main project documentation
├── LICENSE                      # License file
└── package.json                 # Root package.json (if monorepo)
```

---

## ⚙️ How It Works

### 1. **Editor Initialization**
- When a user opens the application, the Monaco Editor component initializes
- Default language and theme are set based on user preferences or defaults
- Editor state is managed through React Context or Redux

### 2. **Real-Time Collaboration**
- User creates or joins a room using a unique room ID
- Socket.io establishes WebSocket connection between client and server
- All code changes are emitted as events:
  ```javascript
  // Client emits
  socket.emit('code-change', { roomId, code, cursorPosition });
  
  // Server broadcasts to room
  io.to(roomId).emit('receive-code', { code, userId, cursorPosition });
  ```
- Other users receive updates and their editors sync automatically
- Conflict resolution handled through operational transformation or CRDTs

### 3. **Code Execution Process**

**Step 1: User Input**
- User writes code in the editor
- Selects programming language from dropdown
- Optionally provides standard input
- Clicks "Run" button

**Step 2: Frontend Processing**
```javascript
const executeCode = async () => {
  const payload = {
    language: selectedLanguage,
    code: editorContent,
    stdin: inputData,
  };
  
  const response = await codeService.execute(payload);
  setOutput(response.data);
};
```

**Step 3: Backend API Call**
```javascript
// Backend receives request
router.post('/execute', authMiddleware, async (req, res) => {
  const { language, code, stdin } = req.body;
  
  // Call external execution service
  const result = await codeExecutionService.run({
    language_id: LANGUAGE_IDS[language],
    source_code: code,
    stdin: stdin,
  });
  
  res.json(result);
});
```

**Step 4: External API (Judge0/Piston)**
- Backend forwards request to Judge0 or Piston API
- Code is compiled in isolated environment
- Execution occurs with time and memory limits
- Output, errors, and statistics are returned

**Step 5: Response Processing**
```javascript
{
  "stdout": "Hello, World!\n",
  "stderr": "",
  "compile_output": "",
  "time": "0.234",
  "memory": 2048,
  "status": {
    "id": 3,
    "description": "Accepted"
  }
}
```

**Step 6: Display Results**
- Output displayed in terminal component
- Errors highlighted with suggestions
- Execution time and memory shown
- Status indicator (Success/Error/Timeout)

### 4. **AI Error Suggestions**
- When compilation error occurs, error message is sent to OpenAI API
- AI analyzes the error and provides suggestions
- Suggestions displayed inline or in error panel

### 5. **Session Persistence**
- User's code automatically saved in MongoDB
- Room state persisted in Redis for quick access
- Session tokens stored in localStorage/cookies
- Code history maintained for user's account

---

## 🔌 API Endpoints

### Authentication
```
POST   /api/auth/register          # Register new user
POST   /api/auth/login             # User login
POST   /api/auth/logout            # User logout
GET    /api/auth/me                # Get current user info
POST   /api/auth/refresh           # Refresh JWT token
```

### Code Execution
```
POST   /api/code/execute           # Execute code
POST   /api/code/save              # Save code snippet
GET    /api/code/snippets          # Get user's code snippets
GET    /api/code/snippet/:id       # Get specific snippet
DELETE /api/code/snippet/:id       # Delete code snippet
```

### Room Management
```
POST   /api/room/create            # Create new room
POST   /api/room/join/:roomId      # Join existing room
GET    /api/room/:roomId           # Get room details
DELETE /api/room/:roomId           # Delete room
GET    /api/room/:roomId/users     # Get users in room
```

### User Management
```
GET    /api/user/profile           # Get user profile
PUT    /api/user/profile           # Update profile
GET    /api/user/history           # Get code execution history
GET    /api/user/preferences       # Get user preferences
PUT    /api/user/preferences       # Update preferences
```

### Socket Events
```
# Client → Server
'join-room'         # Join a collaboration room
'leave-room'        # Leave current room
'code-change'       # Broadcast code changes
'cursor-move'       # Share cursor position
'language-change'   # Notify language change
'user-typing'       # Typing indicator

# Server → Client
'room-joined'       # Confirmation of room join
'user-joined'       # Another user joined room
'user-left'         # User left the room
'receive-code'      # Receive code updates
'receive-cursor'    # Receive cursor position
'error'             # Error messages
```

---

## 💡 Why ViCode?

### Problem Statement
Traditional development environments face several challenges:
1. **Setup Complexity**: Installing compilers, IDEs, and dependencies is time-consuming
2. **Collaboration Barriers**: Sharing code and collaborating in real-time is difficult
3. **Platform Dependency**: Code written on one machine may not work on another
4. **Resource Limitations**: Not everyone has powerful machines for compilation
5. **Learning Curve**: Beginners struggle with complex IDE setups

### ViCode Solution
ViCode solves these problems by providing:

1. **Zero Setup Required**
   - Browser-based - works on any device
   - No installation or configuration needed
   - Instant access to 20+ programming languages

2. **Seamless Collaboration**
   - Real-time code sharing and editing
   - Multiple users can code together simultaneously
   - Perfect for pair programming, interviews, and education

3. **Platform Independence**
   - Write and run code from anywhere
   - Consistent experience across all devices
   - Cloud-based execution ensures reproducibility

4. **Powerful Features Without Overhead**
   - Fast compilation on cloud servers
   - AI-powered error suggestions
   - Professional-grade editor (Monaco/VS Code)

5. **Beginner-Friendly**
   - Simple, intuitive interface
   - Learn by doing - immediate feedback
   - Share code easily with mentors

---

## 🎯 Use Cases

### 1. **Educational Institutions**
- **Online Classes**: Teachers can share code with students in real-time
- **Lab Sessions**: Students collaborate on assignments
- **Coding Exams**: Conduct programming tests online
- **Live Demos**: Demonstrate concepts with immediate execution

### 2. **Technical Interviews**
- **Live Coding Sessions**: Candidates write code while interviewers watch
- **Problem-Solving Assessment**: Evaluate coding skills in real-time
- **Collaborative Screening**: Multiple interviewers can observe simultaneously
- **Code Review**: Review and discuss solutions interactively

### 3. **Remote Development Teams**
- **Pair Programming**: Developers collaborate from different locations
- **Code Reviews**: Quick code sharing for reviews
- **Debugging Sessions**: Troubleshoot issues together
- **Knowledge Sharing**: Senior developers mentor juniors

### 4. **Coding Communities**
- **Hackathons**: Quick prototyping and collaboration
- **Study Groups**: Learn and code together online
- **Open Source Contributions**: Test changes before commits
- **Code Sharing**: Share snippets on forums and social media

### 5. **Personal Use**
- **Quick Testing**: Test code snippets without IDE
- **Learning New Languages**: Experiment with different languages
- **Portfolio Projects**: Showcase coding projects
- **Code Playground**: Practice and experiment

---

## 🚀 Future Enhancements

### Planned Features
1. **Enhanced Collaboration**
   - Video/audio calling integration
   - Chat functionality within rooms
   - Screen sharing capabilities
   - Code review and annotation tools

2. **Advanced Editor Features**
   - Git integration for version control
   - Debugging tools and breakpoints
   - Code snippets library
   - Custom keyboard shortcuts
   - Multi-file project support

3. **AI Integration**
   - Code completion using AI
   - Code optimization suggestions
   - Bug prediction and prevention
   - Natural language to code conversion

4. **Performance Improvements**
   - WebAssembly for faster execution
   - Progressive Web App (PWA) support
   - Offline mode with service workers
   - Code caching and optimization

5. **Social Features**
   - User profiles and portfolios
   - Code sharing and discovery
   - Community forums
   - Leaderboards and challenges

6. **Educational Tools**
   - Interactive tutorials
   - Code challenges and quizzes
   - Progress tracking
   - Achievement badges

7. **Enterprise Features**
   - Team workspaces
   - Private rooms with authentication
   - Analytics and usage reports
   - Custom branding options

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/ViCode.git`
3. Create a new branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit your changes: `git commit -m "Add your feature"`
6. Push to your branch: `git push origin feature/your-feature-name`
7. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add comments to complex code sections
- Update documentation for new features
- Test your changes thoroughly
- Ensure all tests pass before submitting PR

### Areas for Contribution
- Bug fixes and issue resolution
- New language support
- UI/UX improvements
- Performance optimizations
- Documentation improvements
- Feature enhancements

---

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2024 Vivek Saini

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 📞 Contact & Support

### Developer
- **Name**: Vivek Saini
- **GitHub**: [@VivekSaini2005](https://github.com/VivekSaini2005)
- **Repository**: [ViCode](https://github.com/VivekSaini2005/ViCode)

### Get Help
- 📫 **Issues**: [GitHub Issues](https://github.com/VivekSaini2005/ViCode/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/VivekSaini2005/ViCode/discussions)
- 📧 **Email**: [Contact via GitHub]

---

## 🙏 Acknowledgments

- **Monaco Editor** - Microsoft's code editor powering VS Code
- **Judge0** / **Piston** - Code execution APIs
- **Socket.io** - Real-time communication library
- **React Community** - Excellent libraries and tools
- **Open Source Contributors** - For inspiring and supporting this project

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/VivekSaini2005/ViCode?style=social)
![GitHub forks](https://img.shields.io/github/forks/VivekSaini2005/ViCode?style=social)
![GitHub issues](https://img.shields.io/github/issues/VivekSaini2005/ViCode)
![GitHub license](https://img.shields.io/github/license/VivekSaini2005/ViCode)

---

**Made with ❤️ by Vivek Saini**

⭐ If you find this project useful, please consider giving it a star on GitHub!
