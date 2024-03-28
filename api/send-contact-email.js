import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const formData = req.body;

  // 1. Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Or your email provider
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD 
    }
  });

  // 2. Construct email message
  const mailOptions = {
    from: process.env.EMAIL_FROM, // Sender address (often your Gmail address)
    to:  process.env.EMAIL_TO, // Your Gmail address (where you want to receive emails)
    subject: `Contact Form Submission: ${formData.subject}`, 
    text: `
      Name: ${formData.name}
      Email: ${formData.email}
      Message: ${formData.message}
    `
  };

  // 3. Send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: 'Error sending email' }); 
  }
}
