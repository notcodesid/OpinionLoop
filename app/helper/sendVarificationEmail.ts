import { resend } from "../lib/resend";
import { ApiResponse } from "../types/apiResponse";
import VerificationEmail from "../emails/varificationEmails";

export async function sendVarification(
    email : string,
    username : string,
    verifyCode : string
) : Promise<ApiResponse> {
    try{
        await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: email,
            subject: "Varification Code",
            react: VerificationEmail({ username, otp : verifyCode }),
          });
        return {
            success : true,
            message : 'Varification email send successfully'
        }
    }
    catch(emmailError) {
        console.error(emmailError)
        return{
            success : false,
            message : 'Failed to send varification email'
        }
    }

}