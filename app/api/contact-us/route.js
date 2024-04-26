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
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: #f7f7f7;
                    padding: 20px;
                }
                .email-wrapper {
                    background-color: #fff;
                    border-radius: 10px;
                    padding: 20px;
                    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
                }
                .email-content {
                    margin-bottom: 20px;
                }
                .email-field {
                    font-weight: bold;
                    color: #333;
                    margin-bottom: 5px;
                }
                .email-value {
                    color: #666;
                }
                .email-button {
                    background-color: #007bff;
                    color: #fff;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    font-size: 16px;
                    text-decoration: none;
                    display: inline-block;
                }
                .email-button:hover {
                    background-color: #0056b3;
                }
            </style>
        </head>
        <body>
            <div class="email-wrapper">
                <h2>Contact Form Inquiry</h2>
                <div class="email-content">
                    <p class="email-field">Name:</p>
                    <p class="email-value">${data.name}</p>
                </div>
                <div class="email-content">
                    <p class="email-field">Email:</p>
                    <p class="email-value">${data.email}</p>
                </div>
                <div class="email-content">
                    <p class="email-field">Subject:</p>
                    <p class="email-value">${data.subject}</p>
                </div>
                <div class="email-content">
                    <p class="email-field">Message:</p>
                    <p class="email-value">${data.message}</p>
                </div>
                <a href="#" class="email-button">Reply to ${data.name}</a>
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
