import emailjs from 'emailjs-com';

// EmailJS configuration - using environment variables for security
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;

// Validate that required environment variables are present
if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
    console.error('Missing required EmailJS environment variables. Please check your .env file.');
}

// Initialize EmailJS
if (USER_ID) {
    emailjs.init(USER_ID);
}

export const sendEmail = async (formData) => {
    try {
        // Check if EmailJS is properly configured
        if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
            throw new Error('EmailJS configuration is incomplete. Please check environment variables.');
        }

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone,
            message: formData.message,
            to_name: 'Sriram Chowdary Mogalapu',
        };

        const response = await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            templateParams,
            USER_ID
        );

        return {
            success: true,
            message: 'Email sent successfully!',
            response
        };
    } catch (error) {
        console.error('EmailJS Error:', error);
        return {
            success: false,
            message: 'Failed to send email. Please try again.',
            error
        };
    }
};

// Instructions for setting up environment variables:
/*
SECURITY SETUP:

1. EmailJS Setup:
   - Go to https://www.emailjs.com/
   - Create a free account
   - Create a new email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key
   - Update the .env file with your actual values

2. Formspree Setup (Alternative):
   - Go to https://formspree.io/
   - Create a free account
   - Create a new form
   - Get your form ID
   - Update VITE_FORMSPREE_FORM_ID in .env file

3. Environment Variables:
   All sensitive data is now stored in .env file with VITE_ prefix
   Never commit .env file to version control
   
4. EmailJS Template example:
   Subject: New Contact from Portfolio
   Body:
   Hello Sriram,

   You have received a new message from your portfolio website:

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}

   Message:
   {{message}}

   Best regards,
   Portfolio Contact Form

IMPORTANT: 
- The .env file is ignored by git for security
- All credentials are now environment variables
- The application will show errors if environment variables are missing
*/