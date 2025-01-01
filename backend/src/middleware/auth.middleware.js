import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const protectRoute =async (req,res,next)=>{
    try{ 
        const token = req.cookies.jwt;
        if(!token){
            res.status(500).json({msg : "Unauthorized user-NO token provided"});
        }
        const decode = jwt.verify(token,process.env.JWT_SECRET);
        if(!decode){
            res.status(500).json({msg : "Unauthorized user-invalid token provided"});
        }
        const user = await User.findById(decode.userId).select("-password");
        if(!user){
            res.status(500).json({msg : "User not found"});
        }

        req.user= user;
        next();
    }catch(error){
        console.log(error.message);
        res.status(500).json({msg : "internal server error"});
    }
}