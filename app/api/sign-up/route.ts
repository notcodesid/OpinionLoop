import { DBconnect } from "@/app/lib/dbConnect";
import { sendVarification } from "@/app/helper/sendVarificationEmail";
import { messgae, UserModel } from "@/app/model/User";
import bcrypt from "bcrypt"

export async function POST( request : Request) {
    await DBconnect();

    try{
         const { username,email , password} = await request.json()
         const  existedVerifedEmail=await UserModel.find({
            username,
            isVerfied : true
         })

         if(existedVerifedEmail) {
            return Response.json({
                success : false,
                message : 'Email is already taken'
            } , { status : 400})
         }

         const existingUserByEmail = await UserModel.findOne({email})
         const verifyCode = Math.floor(10000 + Math.random() * 900000).toString();

         if(existingUserByEmail) {
            if(existingUserByEmail.isVerified) {
                return Response.json({
                    success : true,
                    messgae : "User already exist with this email"
                } , { status : 500})
            }
            else{
                const hasedPassword = await bcrypt.hash(password, 10)
                existingUserByEmail.password = hasedPassword;
                existingUserByEmail.VerfiedCode = verifyCode;
                existingUserByEmail.verifyCodeExpiry = new Date(Date.now() + 3600000 )
                await existingUserByEmail.save()
            }
         }
         else {
            const hasedPassword = await bcrypt.hash(password , 10)
            const expiryDate = new Date()
            expiryDate.setHours(expiryDate.getHours() + 1)

            const newUser = new UserModel({
                 username,
                 email,
                 password : hasedPassword,
                 verifyCode,
                 verifyCodeExpiry : expiryDate,
                 isVerified : false,
                 isAcceptingMsg :true,
                 messgae : []
            })
            await newUser.save()
         }

         // send varification email
         const emailResponse = await sendVarification(
            username,
            email,
            verifyCode
         )

         if(!emailResponse) {
            return Response.json({
                success : false,
                message : " Error when varification"
            } , {status : 500})
         }

         return Response.json({
            success : true,
            messgae : "Sign up successfully. Verify your email"
         } , { status : 201})

    }
    catch(error) {
        console.error('Error when sign up', error)
        return Response.json(
            {
                success : false,
                message : 'Error when signup'
            },
            {
                status : 500
            }
        )
    }
}