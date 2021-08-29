import mongoose from 'mongoose';

const user=mongoose.Schema({
   firstName:String,
   lastName:String,
   email:String,
   password:String,
   permissionLevel:Number
});
const userModel=mongoose.model('Users',user);
