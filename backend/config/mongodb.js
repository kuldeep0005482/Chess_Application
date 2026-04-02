import mongoose from "mongoose";

const connectDb= async()=>{
    mongoose.connection.on("connected",()=>{
        console.log("Mongodb connected successfully");
    });

    mongoose.connection.on("error",(err)=>{
        console.log("Mongodb connection failed",err);
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/chessGame`);
}
export default connectDb;