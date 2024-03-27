require('dotenv').config(); 

export default async function handler(req, res) {
    console.log('API Route Hit!'); // Add this line 
    // ... rest of your code ...
}

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // Replace 'gmail' with the email service you choose
    auth: {
        user: process.env.EMAIL_USERNAME, // Access from environment variables
        pass: process.env.EMAIL_PASSWORD  // Access from environment variables 
    }
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const formData = req.body;

        const mailOptions = {
            from: 'caleboyelowo.dev@gmail.com', 
            to: 'caleboyelowo.dev@gmail.com', 
            subject: 'New Contact Form Submission',
            text: `You have a new contact form submission. See details below:\n\n` +
                `Name: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Subject: ${formData.subject}\n` +
                `Message: ${formData.message}` 
        };

        try {
            await transporter.sendMail(mailOptions);
console.log('Email sent successfully!'); // Check if this message appears in your terminal
res.status(200).json({ message: 'Email sent!' });
} catch (error) {
    console.error('Error sending email:', error); 
    res.status(500).json({ error: 'Email send error' }); 
  }
    } else {
        res.status(405).end(); // Not allowed method
    }
}
