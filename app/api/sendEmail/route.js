import nodemailer from 'nodemailer';

export async function OPTIONS(req, res) {
  res.setHeader('Allow', 'POST');
  res.status(200).end();
}

export async function POST(req, res) {
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

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: 'Error sending email' });
  }
}
