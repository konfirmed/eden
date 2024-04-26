import { mailOptions, transporter } from '@/app/contact-us/client';
import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();

    // Construct the HTML email content using the form data
    const htmlContent = `
        <html>
        <head>
            <style>
                /* Add your CSS styles here */
                body {
                    font-family: Arial, sans-serif;
                }
                .email-content {
                    margin-bottom: 20px;
                }
                .email-field {
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="email-content">
                <p class="email-field">Name:</p>
                <p>${data.name}</p>
            </div>
            <div class="email-content">
                <p class="email-field">Email:</p>
                <p>${data.email}</p>
            </div>
            <div class="email-content">
                <p class="email-field">Subject:</p>
                <p>${data.subject}</p>
            </div>
            <div class="email-content">
                <p class="email-field">Message:</p>
                <p>${data.message}</p>
            </div>
        </body>
        </html>
    `;
    
    try {
        await transporter.sendMail({
           ...mailOptions,
           subject: `New Contact Form Inquiry - ${data.subject}`,
           html: htmlContent, // Use HTML content instead of plain text
        });

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: err.message }, { status: err.status });
    }
}
