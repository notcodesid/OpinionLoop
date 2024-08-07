import mongoose , {Schema} from "mongoose";


const MessageSchema= new Schema({
content : String,
creartedAt : Date
})


const userSchema = new Schema({
  username : String,
  email : String ,
  password : String,
  VerfiedCode : Boolean,
  verifyCodeExpiry : Date,
  isAdmin : Boolean,
  isAcceptingMsg : Boolean,
  message : Array
});

export const user = mongoose.model('User' ,userSchema);
export const messgae = mongoose.model('Message' ,MessageSchema);