const cron = require('node-cron');
const Message = require('../models/message');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config()
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Ensure environment variables are loaded
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
  console.error('Error: Email credentials are not defined in environment variables');
  process.exit(1);
}

const sendEmail = async () => {
  try {
    const info = await transporter.sendMail({
      from: "rohithvuthunur@gmail.com",
      to: "vuthunurrohith2005@gmail.com",
      subject: 'Scheduled Message',
      text: "Hello Fellow",
    });
    // 
    console.log("mail sent")
  } catch (error) {
    console.error(`Failed to send email to `,error);
  }
};
module.exports = sendEmail