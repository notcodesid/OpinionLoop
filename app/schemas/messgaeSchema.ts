import { z} from 'zod';

export const MsgSchema = z.object({
    content : z
    .string()
    .min(10 , {message : "Content must be atleast 10 character"})
    .max(100 , {message : "Content must be no longer than  100 character"})
})