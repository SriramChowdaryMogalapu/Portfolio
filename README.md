# Portfolio Website

A modern, responsive portfolio website showcasing skills, projects, and contact information.

You can view the website using the link in the about section.

## Features

- Modern UI with clean design
- Smooth animations and transitions
- Responsive design for all screen sizes
- Dark/light mode toggle
- Contact form with server-side email handling
- Easy configuration through JavaScript variables

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/SriramChowdaryMogalapu/Portfolio.git
cd Portfolio
```

### 2. Install dependencies for the server

```bash
npm install express body-parser cors nodemailer
```

### 3. Configure environment variables

For security reasons, sensitive information like SMTP credentials should not be hardcoded in your files. Instead:

1. Create a `.env` file in the root directory:

```
SMTP_HOST=smtp.elasticemail.com
SMTP_USERNAME=your-email@example.com
SMTP_PASSWORD=your-password
```

2. Update the `config.js` file to use environment variables:

```javascript
require('dotenv').config();

module.exports = {
  smtp: {
    host: process.env.SMTP_HOST,
    username: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD
  }
};
```

3. Install dotenv:

```bash
npm install dotenv
```

### 4. Run the server

```bash
node server.js
```

The server will start on port 3000 by default. You can access the website at http://localhost:3000

## Customization

You can easily customize the portfolio by editing the `CONFIG` object in `new-script.js`:

- Personal information (name, title, contact details)
- Skills and expertise
- Projects
- Social media links

## Security Best Practices

1. **Never commit sensitive information** like API keys, passwords, or tokens to your repository
2. Use environment variables for all sensitive information
3. Add `.env` to your `.gitignore` file
4. Use server-side code to handle sensitive operations like sending emails

## Deployment

When deploying to a hosting service like Netlify, Vercel, or Heroku:

1. Set up environment variables in your hosting provider's dashboard
2. Configure the build settings according to your hosting provider's requirements
3. Deploy your application

## License

This project is open source and available under the [MIT License](LICENSE).
