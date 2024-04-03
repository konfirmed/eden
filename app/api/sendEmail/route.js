import nodemailer from 'nodemailer';

export async function OPTIONS(req, res) {
  try {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.status(200).end();
  } catch (error) {
    console.error("Error handling OPTIONS request:", error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

export async function POST(req, res) {
  try {
    console.log('Received form data:', req.body);

    const formData = req.body; // Access the parsed form data directly

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

    await transporter.sendMail(mailOptions);
    
    console.log('Email sent successfully');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error("Error sending email:", error);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(500).json({ error: 'Error sending email' });
  }
}
