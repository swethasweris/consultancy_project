require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
    const { name, phone, email, message, customization } = req.body;
    const recipientEmail = process.env.RECIPIENT_EMAIL; // Owner's email

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.DUMMY_EMAIL,  // Your dummy email
            pass: process.env.DUMMY_PASS    // App password (Google Security)
        }
    });

    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: recipientEmail,
        subject: `New Machinery Enquiry from ${name}`,
        text: `
        You have received a new enquiry:

        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
        Customization Details: ${customization}

        Please respond as soon as possible.
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
