import { useState } from "react"
import { useAuthStore } from "../store/useAuthStore.js";
import {MessageSquare,Loader} from 'lucide-react'
const SignUpPage = () => {
  const [showPassword, setPassword] = useState(false);

  const [formData,setFormData] = useState({
    fullname : '',
    email:"",
    password :""

  });
  const{signup , isSigningIn} = useAuthStore();
  const validateForm =()=>{
  }
  const handleSubmit =(e)=>{
    e.preventDefault();

  }
  return (
    <div>
      <MessageSquare />
      <Loader/>
    </div>
  )
}

export default SignUpPage