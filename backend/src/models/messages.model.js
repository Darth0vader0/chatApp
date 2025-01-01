import mongoose from "mongoose";

const messageModelSchema = new mongoose.Schema({
    senderId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require: true   
    },
    recieverId:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        require: true 
    },
    text:{
        type : String
    },
    image:{
        type : String
    }
},{timestamps:true});

const Messages =  mongoose.model("Messages",messageModelSchema)

export default Messages;
