const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password'
    }
});

app.post('/checkout', (req, res) => {
    const { name, email, address } = req.body;

    // Insert data into SQL database logic here

    const mailOptions = {
        from: 'your-email@gmail.com',
        to: email,
        subject: 'Your Cheatsheet Purchase',
        text: `Dear ${name},\n\nThank you for your purchase! Please find your cheatsheet attached.\n\nBest regards,\nCheatsheet Store`,
        attachments: [
            {
                filename: 'cheatsheet1.pdf',
                path: './cheatsheet1.pdf'
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Error sending email' });
        }
        res.json({ message: 'Email sent successfully' });
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
