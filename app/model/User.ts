import mongoose , {Schema} from "mongoose";
import { boolean, string } from "zod";


const MessageSchema= new Schema({
content : String,
creartedAt : Date
})


const userSchema = new Schema({
  username : String,
  email : String ,
  password : String,
  VerfiedCode : string,
  verifyCodeExpiry : Date,
  isVerified : boolean,
  isAdmin : Boolean,
  isAcceptingMsg : Boolean,
  message : Array
});

export const UserModel = mongoose.model('User' ,userSchema);
export const messgae = mongoose.model('Message' ,MessageSchema);