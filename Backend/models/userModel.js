import { type } from "@testing-library/user-event/dist/type";
import  mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
       FName:{
         type:String,
         require:true
       },
       LName:{
           type:String,
           require:true
       },
       Email:{
           type:String,
           require:true
       },
       PhoneNo:{
         type:Number,
         require:true
       },
       Password:{
         type:String,
         require:true
       }
},{timestamps:true});

export const User = mongoose.model("User",userSchema);
