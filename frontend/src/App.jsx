import Navbar from "./components/Navbar.jsx"
import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SettingsPage from "./pages/SettingsPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import { useAuthStore } from "./store/useAuthStore.js";
import { useEffect } from "react";
const App=() =>{
        const {authUser,checkAuth} = useAuthStore();
        useEffect(()=>{
          checkAuth()
        }, [checkAuth]); 

        console.log({authUser});
  return (
    
    <>
      
       <Navbar />
         <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />         
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
         </Routes>
    </>
   
  )
}

export default App