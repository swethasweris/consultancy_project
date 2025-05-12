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
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'your-email@example.com'; // Owner's email

    // Create formatted email content with better styling
    const emailContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
        <h2 style="color: #8B2323; border-bottom: 2px solid #8B2323; padding-bottom: 10px;">New Machinery Enquiry</h2>
        
        <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
        </div>
        
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <h3 style="color: #8B2323; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-line;">${message}</p>
        </div>
        
        ${customization ? `
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px;">
            <h3 style="color: #8B2323; margin-top: 0;">Customization Details:</h3>
            <p style="white-space: pre-line;">${customization}</p>
        </div>
        ` : ''}
        
        <p style="margin-top: 30px; font-size: 12px; color: #777;">This is an automated email sent from your website contact form.</p>
    </div>
    `;

    // Create plain text version for email clients that don't support HTML
    const plainTextContent = `
    New Machinery Enquiry from ${name}

    Name: ${name}
    Phone: ${phone}
    Email: ${email}
    
    Message: ${message}
    ${customization ? `Customization Details: ${customization}` : ''}
    
    Please respond as soon as possible.
    `;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.DUMMY_EMAIL,  // Your dummy email
            pass: process.env.DUMMY_PASS    // App password (Google Security)
        }
    });

    const mailOptions = {
        from: `"Vishacatech Website" <${process.env.DUMMY_EMAIL}>`,
        replyTo: email, // Set reply-to as the customer's email
        to: recipientEmail,
        subject: `New Machinery Enquiry from ${name}`,
        text: plainTextContent,
        html: emailContent
    };

    try {
        await transporter.sendMail(mailOptions);
        
        // Send confirmation email to the customer
        const confirmationMailOptions = {
            from: `"Vishacatech Engineers" <${process.env.DUMMY_EMAIL}>`,
            to: email,
            subject: 'Thank you for your enquiry',
            html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
                <h2 style="color: #8B2323; border-bottom: 2px solid #8B2323; padding-bottom: 10px;">Thank You for Contacting Us</h2>
                
                <p>Dear ${name},</p>
                
                <p>Thank you for your interest in Vishacatech Engineers. We have received your enquiry and will get back to you as soon as possible.</p>
                
                <p>For immediate assistance, you can also reach us via WhatsApp at <strong>8903688838</strong>.</p>
                
                <div style="margin: 25px 0; padding: 15px; background-color: #f9f9f9; border-radius: 5px;">
                    <h3 style="color: #8B2323; margin-top: 0;">Your Enquiry Details:</h3>
                    <p><strong>Message:</strong> ${message}</p>
                    ${customization ? `<p><strong>Customization Details:</strong> ${customization}</p>` : ''}
                </div>
                
                <p>Best Regards,<br>Vishacatech Engineers Team</p>
            </div>
            `
        };
        
        await transporter.sendMail(confirmationMailOptions);
        
        res.status(200).json({ success: true, message: 'Your message has been sent successfully! We will contact you soon.' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email. Please try again or contact us directly.' });
    }
});

// Simple health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
