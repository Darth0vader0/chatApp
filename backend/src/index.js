import experess from'express';
import dotEnv from 'dotenv';
import authRoutes from './routes/auth.route.js';   
import messagesRoute from './routes/message.route.js';
import { connectDB } from './lib/db.js';
dotEnv.config();
const app = experess();
const PORT = process.env.PORT;
import cookieParser from 'cookie-parser';

app.use(experess.json())

app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/message",messagesRoute);
app.listen(PORT,()=>{
    console.log("server is running on port 5001");
    connectDB();
    
});

