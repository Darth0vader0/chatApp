import  jwt from 'jsonwebtoken';
import  dotEnv from 'dotenv';
dotEnv.config();

export const jwtGenerator =(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'10d'
    });
    res.cookie("jwt",token,{
        maxAge :10*24*60*60*1000,
        httpOnly:true,
        secure:process.env.NODE_ENV!=="development"
    });


}