import { mailOptions, transporter } from '@/app/contact-us/client';
import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();

    // Construct the email content using the form data
    const emailContent = `
        New Contact Form Inquiry\n
        Name: ${data.name}\n
        Email: ${data.email}\n
        Subject: ${data.subject}\n
        Message: ${data.message}\n
    `;
    
    try {
        await transporter.sendMail({
           ...mailOptions,
           subject: `New Contact Form Inquiry - ${data.subject}`,
           text: emailContent,
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: err.status });
    }
}
