import mongoose from 'mongoose';
import dotEnv from 'dotenv';
dotEnv.config();

export const connectDB =async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log("connected successfully");
    } catch (error) {
        console.log(error);
    }
}