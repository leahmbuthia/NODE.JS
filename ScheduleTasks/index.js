import dotenv from 'dotenv';
import express from 'express';
// import bodyParser from 'body-parser';
import logger from './src/utils/logger.js';
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const sendMail=async ()=>{

}

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const mailOptions = {
    from: process.env.EMAIL,
    to: 'leahnyambura682@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'that my first nodemailer email',
}

app.get('/send-mail', async (req, res) => {
    try {
        logger.info('Sending mail...');
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                logger.error(error);
                res.status(500).send(error);
            } else {
                logger.info(`Email sent: ${info.response}`);
                res.status(200).send('Email sent successfully');
            }
        });
    } catch (error) {
        logger.error('Error sending mail:', error);
        res.status(500).send('Internal server error');
    }
});

// Middleware for parsing JSON and URL-encoded bodies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
crossOriginIsolated.schedule('5 * * * *',()=>{
    sendMail();
    logger.error('running the email');
});

// Error handling middleware
app.use((err, req, res, next) => {
    logger.error('Unhandled error:', err);
    res.status(500).send('Internal server error');
});

app.listen(port, () => {
    logger.info(`Server running on port http://localhost:${port}`);
});
