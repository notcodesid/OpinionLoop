import {z} from "zod";

export const signUpSchema = z.object({
    username : z.string().min(2 , "Username must be atleast 2 character").regex(/^[a-zA-Z0-9_]+$/ , "Username must not contain special character"),
    email : z.string().email({message : "Invalid email address"}),
    password : z.string().min(6 , "Password must be atleast 6 character")
})

export const SigninSchema = z.object({
    identifier : z.string(),
    password : z.string()
})

export const validSchema = z.object({
    code : z.string().length(6 , "Verfication code must be 6 digits")
})

export const MsgSchema = z.object({
    content : z.string().min(10 , "Content must be atleast 10 character").min(200 , "Content must be no longer than 200 characters ")
})