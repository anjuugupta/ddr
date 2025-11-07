// utils/sendEmail.js
import nodemailer from "nodemailer";
import fs from "fs";

const createTransporter = () => {
  // using Gmail SMTP
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_PASSWORD,
    },
  });
};

const buildHtml = (data) => {
  return `
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Company:</strong> ${data.companyName || "-"}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Contact:</strong> ${data.contact}</p>
    <p><strong>Location:</strong> ${data.location || "-"}</p>
    <p><strong>Services:</strong> ${data.services || "-"}</p>
    <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, "<br/>")}</p>
    <p><strong>Subscribe:</strong> ${data.subscribe ? "Yes" : "No"}</p>
    <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
  `;
};

const sendEmail = async (data, files = []) => {
  const transporter = createTransporter();

  const attachments = (files || []).map((f) => ({
    filename: f.originalname || f.filename || f.name,
    path: f.path,
    contentType: f.mimetype,
  }));

  const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to: [process.env.TO_OFFICIAL, process.env.TO_PERSONAL].filter(Boolean),
    subject: `Contact form: ${data.name} (${data.email})`,
    html: buildHtml(data),
    attachments,
  };

  const info = await transporter.sendMail(mailOptions);

  // If you want to delete uploaded files after sending, do it here (optional)
  // attachments.forEach(a => fs.unlinkSync(a.path));

  return info;
};

export default sendEmail;
