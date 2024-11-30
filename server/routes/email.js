const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if(!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
    }

  try {
    const transporter = nodemailer.createTransport({
      host:process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      service:process.env.SMTP_SERVICE,
      auth: {
        user: process.env.MAIL_ID, // Replace with your email
        pass: process.env.APP_PASSWORD, // Replace with your email password or app password
      },
    });

    const mailOptions = {
      from: process.env.MAIL_ID, // Replace with your email
      to: process.env.RECEIVER_MAIL_ID, // Replace with your email to receive messages
      subject: `Contact Form Submission from ${name}`,
      text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

module.exports = router;
