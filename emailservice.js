const { Resend } = require("resend");
require("dotenv").config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendWelcomeEmail(toEmail) {
  try {
    const response = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: toEmail,
      subject: "Welcome to DEV@Deakin!",
      html: "<strong>Thanks for subscribing to DEV@Deakin — your student tech community!</strong>",
    });

    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

module.exports = { sendWelcomeEmail };
