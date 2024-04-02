import nodemailer from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface EmailResponse {
  message?: string;
  error?: string;
}

export async function OPTIONS(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Allow', 'POST');
  res.status(200).end();
}

export async function POST(req: NextApiRequest, res: NextApiResponse<EmailResponse>) {
  const formData: FormData = req.body; // Access the parsed form data directly

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: `Contact Form Submission: ${formData.subject}`,
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: 'Error sending email' });
  }
}
