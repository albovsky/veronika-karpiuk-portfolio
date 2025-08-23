import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  service: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().optional(),
  isHuman: z.boolean().refine((val) => val === true),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);

    // Here you would typically:
    // 1. Send an email using Resend, SendGrid, or similar service
    // 2. Save to database
    // 3. Send to CRM
    
    // For now, we'll just log and return success
    console.log("Contact form submission:", validatedData);

    // Simulate email sending (replace with actual email service)
    // await sendEmail({
    //   to: "hello@veronikak.com",
    //   from: "noreply@veronikak.com",
    //   subject: `New Contact Form Submission - ${validatedData.service}`,
    //   html: generateEmailTemplate(validatedData),
    // });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Invalid form data", errors: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

// Helper function to generate email template
function generateEmailTemplate(data: z.infer<typeof contactSchema>) {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Service:</strong> ${data.service}</p>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.message ? `<p><strong>Message:</strong><br>${data.message}</p>` : ''}
    <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
  `;
}