import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import { jwtGenerator } from "../lib/utils.js";
import cloudinary from "../lib/cloudinary.js";
export const signup= async (req,res)=>{
    console.log("singup")
    const {fullName,email,password}=req.body;
    try {
        if(password.length<6){
            return res.status(400).json({msg : "password must contain 6 characters"});
        }
        if(!fullName||!email){
            res.status(400).json({
                msg:"all fields are required"
            });
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({msg:"the user with this email already exist"});
        }
        const salt = await bcrypt.genSalt(15);
        const  hashedPassword = await bcrypt.hash(password,salt);
        const newUser = new User({
            fullName : fullName,
            email:email,
            password : hashedPassword
        });

        if(!newUser){
            res.status(400).json({msg:"invalid user data"});
        }else{
            // generate the jwt token;
            jwtGenerator(newUser._id,res)
            await newUser.save();
            res.status(201).json({
                _id:newUser._id,
                fullName :newUser.fullName,
                email:newUser.email,
                profilePic : newUser.profilePic,

            });

        }

    } catch (error) {
        console.log("something is wrong", error.message)
        res.status(500).json({msg :"internal server error"});
    }

};

export const login=async (req,res)=>
{
 const {email,password}= req.body;
    try {
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({msg : "invalid credentials"});
        }
           const isPassword = await bcrypt .compare(password,user.password);
           if (!isPassword) {
                return res.status(400).json({msg : "incorrect password"})
           }

           jwtGenerator(user._id,res)

           res.json({
            _id:user._id,
            fullName :user.fullName,
            email:user.email,
            profilePic : user.profilePic,

           });
        
    } catch (error) {
        console.log("error while logging in ",error.message)
        res.status(500).json({msg:"internal server error"});
    }

};

export const logout=(req,res)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({msg:"user logged out successfully"})
    } catch (error) {
        console.log("error while logging in ",error.message)
        res.status(500).json({msg:"internal server error"});
    }

};

export const updateProfile= async (req,res)=>{
    try {
        const {profilePic} = req.body;
        const userId =req.user._id;

        if(!profilePic){
            res.status(400).json({msg : "profile picture required"});
        }
        const uploadPic = await cloudinary.uploader.upload(profilePic);
        const updatedProfilePic = await User.findByIdAndUpdate(userId,{profilePic:uploadPic.secure_url},{new:true});

        res.status(200).json(updatedProfilePic);
        } catch (error) {
        res.status(500).json({msg:"internal server error"});
    }
}
export const checkUser = (req,res)=>
{
    try {
        res.status(200).json({msg : "user is authenticated"})
        console.log
    } catch (error) {
        console.log("there is an error",error.message);
        res.status(500).json({msg:"internal server error"});
    }
}