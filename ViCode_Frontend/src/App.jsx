import {Routes, Route, Navigate} from "react-router";
import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {checkAuth} from "./auth_slice"
import Admin from "./pages/Admin";
import ProblemPage from "./pages/Problempage";
import AdminPanel from "./components/AdminPanel";
import AdminDelete from "./components/AdminDelete";
import AdminUpdate from "./components/AdminUpdate";
import AdminVideo from "./components/AdminVideo";
import AdminUpload from "./components/AdminUpload";


function App(){

    const {isAuthenticated,user,loading} = useSelector((state)=>state.auth);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(checkAuth());
    },[dispatch]);

    if(loading){// if it takes time to for check then show loading
        return<div className="min-h-screen flex items-center justify-center">
                  <span className="loading loading-spinner loading-lg"></span>
              </div>;
    }

    return(
      <>
        <Routes>
          <Route path="/" element={isAuthenticated?<Homepage></Homepage>:<Navigate to = "/login"></Navigate>}></Route>
          <Route path="/login" element={isAuthenticated?<Navigate to = '/'></Navigate>:<Login/>}></Route>
          <Route path="/signup" element={isAuthenticated?<Navigate to = '/'></Navigate>:<SignUp/>}></Route>
          <Route path="/admin" element={isAuthenticated && user?.role === 'admin' ? <Admin /> : <Navigate to="/" />} />
          <Route path="/admin/create" element={isAuthenticated && user?.role === 'admin' ? <AdminPanel /> : <Navigate to="/" />} />
          <Route path="/admin/delete" element={isAuthenticated && user?.role === 'admin' ? <AdminDelete /> : <Navigate to="/" />} />
          <Route path="/admin/update" element={isAuthenticated && user?.role === 'admin' ? <AdminUpdate /> : <Navigate to="/" />} />
          <Route path="/admin/video" element={isAuthenticated && user?.role === 'admin' ? <AdminVideo /> : <Navigate to="/" />} />
          <Route path="/admin/upload/:problemId" element={isAuthenticated && user?.role === 'admin' ? <AdminUpload /> : <Navigate to="/" />} />
          <Route path="/problem/:problemId" element={<ProblemPage/>}></Route>
        </Routes>
      </>
    )
}

export default App;