// const cron = require('node-cron');
// const Message = require('../models/message');
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv')
// dotenv.config()
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Ensure environment variables are loaded
// if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
//   console.error('Error: Email credentials are not defined in environment variables');
//   process.exit(1);
// }

// const sendEmail = async (recipient, message) => {
//   try {
//     const info = await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: recipient,
//       subject: 'Scheduled Message',
//       text: message,
//     });
//     console.log(`Email sent to ${recipient}: ${info.messageId}`);
//   } catch (error) {
//     console.error(`Failed to send email to ${recipient}: ${error.message}`);
//   }
// };

// const initializeScheduler = () => {
//   cron.schedule('* * * * *', async () => {
//     const now = new Date()
//     now.setMilliseconds(0)
//     console.log(now)
//     try {
//       const messages = await Message.find({ sender:"rohithvuthunur@gmail.com",scheduledTime:now});

//       if (messages.length === 0) {
//         console.log('No messages to send.');
//         return;
//       }

//       for (const message of messages) {
//         await sendEmail(message.recipient, message.content);
//         message.sent = true;
//         await message.save();
//       }
//     } catch (error) {
//       console.error('Error fetching messages or sending emails:', error.message);
//     }
//   });

//   console.log('Message scheduler initialized.');
// };

// module.exports = initializeScheduler;

const cron = require('node-cron');
const Message = require('../models/message');
const nodemailer = require('nodemailer');

// Function to send email
const sendEmail = async (senderEmail, senderPassword, recipient, messageContent) => {
  try {
    // Create a transporter dynamically using the sender's credentials
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: senderEmail,
      to: recipient,
      subject: 'Scheduled Message',
      text: messageContent,
    });

    console.log(`Email sent to ${recipient}: ${info.messageId}`);
  } catch (error) {
    console.error(`Failed to send email to ${recipient}: ${error.message}`);
  }
};

// Scheduler function
const initializeScheduler = () => {
  cron.schedule('* * * * *', async () => {
    const now = new Date();
    now.setMilliseconds(0); // Truncate milliseconds for matching
    console.log("Scheduler running at:", now);

    try {
      // Fetch unsent messages whose scheduled time matches the current time
      const messages = await Message.find({ scheduledTime: now, sent: false });

      if (messages.length === 0) {
        console.log('No messages to send.');
        return;
      }

      for (const message of messages) {
        if (!message.sender || !message.nodepass) {
          console.error(`Sender details are missing for message: ${message._id}`);
          continue;
        }

        // Send the email using sender's details
        await sendEmail(
          message.sender,   // Sender's email
          message.nodepass, // Sender's password
          message.recipient,       // Recipient's email
          message.content          // Message content
        );

        // Mark the message as sent and save
        message.sent = true;
        await message.save();
      }
    } catch (error) {
      console.error('Error fetching messages or sending emails:', error.message);
    }
  });

  console.log('Message scheduler initialized.');
};

module.exports = initializeScheduler;