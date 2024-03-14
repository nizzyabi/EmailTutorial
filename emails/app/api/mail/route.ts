import NizzyEmail from "@/emails";
import { render } from "@react-email/render"
import { Resend } from "resend"

// Call ResendA PI Keys
const resend = new Resend(process.env.RESEND_API_KEY);

// POST request to resend & react email
export async function POST (request: Request, res: Response) {
    
    // get email from frontend
    const { email } = await request.json()
    
    // send email
    const { data, error } = await resend.emails.send({
        from: "Acme <onboarding@resend.dev>",
        to: [email],
        subject: "Your Developer Roadmap",
        html: render(NizzyEmail()),
    });

    // error handling
    if (error) {
        return Response.json(error)
    }

    // success message
    return Response.json({ message: "Email sent successfully" })
}
