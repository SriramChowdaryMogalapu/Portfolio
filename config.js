// Load environment variables
try {
  require('dotenv').config();
} catch (e) {
  console.warn('dotenv module not found. Using fallback configuration.');
}

// Export configuration with environment variables
module.exports = {
  smtp: {
    host: process.env.SMTP_HOST || "smtp.elasticemail.com",
    username: process.env.SMTP_USERNAME || "mogalapusriram391@gmail.com",
    // IMPORTANT: In production, always use environment variables for passwords
    // This fallback is only for development and should be removed in production
    password: process.env.SMTP_PASSWORD || "********" // Password removed for security
  }
};