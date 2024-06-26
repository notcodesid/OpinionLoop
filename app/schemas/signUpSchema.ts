import {z} from 'zod'

export const usernameVaildation = z
.string()
.min(2 , "Username must be atleast 2 character")
.max(50, "Username does not contain more than 50 character")
.regex(/^[a-zA-Z0-9_]+$/ , "Username must not contain special character")

export const signUpSchema = z.object({
    username : usernameVaildation,
    email : z.string().email({message : "Invalid email address"}),
    password : z.string().min(6 , {message : "Password must be atleast 6 character"})
})