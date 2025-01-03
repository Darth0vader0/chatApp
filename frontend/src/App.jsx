import Navbar from "./components/Navbar.jsx"
import {Routes,Route, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
const App=() =>{
        const {authUser,checkAuth,isCheckingAuth} = useAuthStore();
        useEffect(()=>{
          checkAuth()
        }, [checkAuth]); 

        console.log({authUser});
        if(isCheckingAuth && !authUser)
          return (
              <div className="flex   items-center justify-center h-screen">
                    <div className="flex w-52 flex-col gap-4">
                          <div className="skeleton h-32 w-full"></div>
                          <div className="skeleton h-4 w-28"></div>
                          <div className="skeleton h-4 w-full"></div>
                          <div className="skeleton h-4 w-full"></div>
                     </div>
              </div>
          );
        
  return (
    
    <>
      
       <Navbar />
      
         <Routes>
          <Route path="/" element={authUser ?<HomePage /> : <Navigate to="/login"/>} />
          <Route path="/signup" element={!authUser?<SignUpPage />:<Navigate to="/"/> } />
          <Route path="/login" element={!authUser?<LoginPage />: <Navigate to="/"/>} />         
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={authUser?<SettingsPage />: <Navigate to="/login"/>} />
         </Routes>
    </>
   
  )
}

export default App