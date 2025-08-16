require('dotenv').config();
const express = require('express');
const mailgun = require('mailgun-js');
const path = require('path');

const app = express();
const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));  // Serve static files

app.post('/subscribe', (req, res) => {
  const { email } = req.body;

  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ message: 'Invalid email address' });
  }

  const data = {
    from: 'DEV@Deakin <welcome@yourdomain.com>',
    to: email,
    subject: 'Welcome to DEV@Deakin!',
    text: `Thanks for subscribing to DEV@Deakin, ${email}. We’re excited to have you on board!`
  };

mg.messages().send(data, (error, body) => {
  if (error) {
    console.error('Mailgun error:', error);  // Log full error here
    return res.status(500).json({ message: 'Failed to send email.', error: error.message });
  }
  res.json({ message: 'Welcome email sent successfully!' });
});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));