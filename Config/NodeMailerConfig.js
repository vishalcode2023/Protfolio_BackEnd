const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMPT_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMPT_LOGIN,
    pass: process.env.SMPT_PASS,
  },
});

/**
 * Send contact form email to your Gmail
 */
async function sendPortfolioEmail({ name, email, subject, message }) {
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2>📨 New Contact Message from Portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong><br/>${message}</p>
      <hr/>
      <p style="font-size: 12px;">This message was sent from your portfolio website's contact form.</p>
    </div>
  `;

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMPT_LOGIN}>`,
    to: process.env.SMPT_LOGIN,
    replyTo: email,
    subject: subject || "New Contact From Portfolio",
    html: htmlContent,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending portfolio email:", error);
    throw error;
  }
}

module.exports = { sendPortfolioEmail };
