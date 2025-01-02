import experess from'express';
import dotEnv from 'dotenv';
import cookieParser from 'cookie-parser';
import ports from 'cors';
import { connectDB } from './lib/db.js';
import authRoutes from './routes/auth.route.js';   
import messagesRoute from './routes/message.route.js';
dotEnv.config();
const app = experess();
const PORT = process.env.PORT;


app.use(experess.json())
app.use(cookieParser());
app.use(ports({
    origin: "http://localhost:5173/",
    credentials: true, // Allow cookies
  }));


app.use("/api/auth",authRoutes);
app.use("/api/message",messagesRoute);
app.listen(PORT,()=>{
    console.log("server is running on port 5001");
    connectDB();
    
});

