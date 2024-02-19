import express from 'express';
import dotenv from 'dotenv';
import logger from './logger.js';
import nodemailer from 'nodemailer';
import emailTemp from './emailTemp.js';

dotenv.config();
const port = process.env.API_PORT || 3000;
const app = express();

//middlewares
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
    subject: 'Sending Email for Yooohooo!',
    // text: 'test 2 sending dummy emails!'
    html : emailTemp
};

app.get('/send-mail', async(req, res) => {
    try {
        logger.info('Sending mail....');
       await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                logger.error(error);
                res.status(500).send(error);
            } else {
                logger.info(`Email sent: ${info.response}`);
                res.status(500).send(error);
            }
        });
    } catch (error) {
        logger.error(error);
    }

});

app.listen(port, () => {
    logger.info(`server running on http://localhost:${port} `);
})
