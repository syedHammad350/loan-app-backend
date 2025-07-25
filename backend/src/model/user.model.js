import mongoose, { model, Schema, Types } from "mongoose";
const userschema= new Schema({
    name:{
        type:String
    },
    email:{
        type:String,
         required: true,
    },
    password:{
        type:String,
        required: true,
    },
    phonNo:{
        type:String,
        
    },
    profileimage:{
        type:String
    },
    userType: {
    type: String,
    default: 'user'
  },
})

const User=model("Auth",userschema)
export default User
