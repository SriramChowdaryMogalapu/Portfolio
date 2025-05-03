// Load environment variables
try {
  require('dotenv').config();
} catch (e) {
  console.warn('dotenv module not found. Using fallback configuration.');
}

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const config = require('./config');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('.')); // Serve static files from current directory

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: config.smtp.host,
      port: 587,
      secure: false,
      auth: {
        user: config.smtp.username,
        pass: config.smtp.password
      }
    });
    
    // Send email
    await transporter.sendMail({
      from: config.smtp.username,
      to: config.smtp.username, // Send to yourself
      subject: "Form Submission in Portfolio",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });
    
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Add a note about installation
console.log('Note: To run this server, you need to install the required dependencies:');
console.log('npm install express body-parser cors nodemailer');