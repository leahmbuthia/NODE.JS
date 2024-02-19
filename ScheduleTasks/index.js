import express from 'express';
import dotenv from 'dotenv';
import logger from './logger.js';
import nodemailer from 'nodemailer';
import emailTemp from './emailTemp.js';
import cron from 'node-cron';

dotenv.config();
const port = process.env.API_PORT || 3000;
const app = express();

const sendMail = async () => {
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
        html: emailTemp
    };
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
};

// schedule tasks to be run on the server
//  ┌────────────── second (optional)
//  │ ┌──────────── minute
//  │ │ ┌────────── hour
//  │ │ │ ┌──────── day of month
//  │ │ │ │ ┌────── month
//  │ │ │ │ │ ┌──── day of week
//  │ │ │ │ │ │
//  │ │ │ │ │ │
//  * * * * * *

// field	        value
// second	        0-59
// minute	        0-59
// hour	            0-23
// day of month	    1-31
// month	        1-12 (or names) ie January, February, March, April, May, June, July, August, September, October, November, December 
// day of week	    0-7 (or names, 0 or 7 are sunday) ie Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday


//every second  - * * * * * *
//every minute  - * * * * *
//every hour    - * * * *            
//every day     - * * *               //every day at 00:00
//every month   - * *               //every month at 00:00
//every week    - * *                //every week at 00:00
//every year    - *                  //every year at what day and time 

//after every 5 seconds         - */5 * * * * *
//after every 5 minutes         - */5 * * * *
//after every 5 hours           - */5 * * *
//after every 5 days            - */5 * *
//after every 5 months          - */5 *
//after every 5 weeks           - */5 *
//after every 5 years           - */5

//every friday at 5pm           - 0 17 * * 5
//day 1 of every month at 12pm  - 0 12 1 * *
//last week of a month at 1pm 

cron.schedule('*/5 * * * * *', () => {
    sendMail();
});


app.listen(port, () => {
    logger.info(`server running on http://localhost:${port} `);
})
