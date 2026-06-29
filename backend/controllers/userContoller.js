import userModel from "../models/userModel.js";
import chessProfileModel from "../models/chessProfileModel.js";

export const getUserData= async (req,res)=>{
     try {

        const userId= req.userId;
        const user= await userModel.findById(userId);
        const profile = await chessProfileModel.findById(userId);
        if(!user){
            return res.json({success:false,message:"User not found"});
        }

        res.json({success:true,data:{
            userId: user._id,
            name:user.name,
            rating: profile?.rating || 1200,
            // email:user.email,
            isAccountVerified:user.isAccountVerified,
        }});
        
     } catch (error) {
        res.json({success:false,message:error.message});
     }

}