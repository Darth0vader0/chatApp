import cloudinary from "../lib/cloudinary.js";
import Messages from "../models/messages.model.js";
import User from "../models/user.model.js";

export const getUserForSidebar = async(req,res)=>{
    try {
        const loggedInUser = req.user._id;
        const filterUsers = await User.find({_id :{$ne :loggedInUser}}).select('-password');

        res.status(200).json(filterUsers)
        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({msg:"internal server error"});

    }
}

export const getMessages =async(req,res)=>{
    try {
        const {id:userToChatId} = req.params;
        const myId = req.user._id;

        const messages = await Messages.find(
            {
                $or:[
                    {senderId :myId,receiverId:userToChatId},
                    {senderId:userToChatId,receiverId:myId}
                ]
            }
        );
        res.status(200).json(messages)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({msg:"internal server error"});
    }
};

export const sendMessages =async(req,res)=>{
    try {
        const {text,image} = req.body;
        const senderId = req.user._id;
        const {id:receiverId} = req.params;
        let imageUrl ;
        if(image){
            const uploadImg = await cloudinary.uploader.upload(image);
            imageUrl = uploadImg.secure_url;
        }
        const newMassage = new Messages({
            senderId,
            receiverId,
            text,
            image :imageUrl

        })

        await newMassage.save();
    } catch (error) {
        
    }
}