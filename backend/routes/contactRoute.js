// routes/contactRoute.js
import express from "express";
import multer from "multer";
import path from "path";
import ContactForm from "../models/ContactForm.js";
import sendEmail from "../utils/sendEmail.js";
import fs from "fs";

const router = express.Router();

// Multer setup (store in /uploads)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(process.cwd(), "uploads");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${unique}${ext}`);
  },
});
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } }); // 10MB limit

// POST /api/contact  (accepts multipart/form-data with optional files)
router.post("/contact", upload.array("attachments", 5), async (req, res) => {
  try {
    // fields come in req.body
    const {
      name,
      companyName,
      email,
      contact,
      message,
      location,
      services,
      subscribe,
    } = req.body;

    // simple validation
    if (!name || !email || !contact || !message) {
      return res.status(400).json({ success: false, message: "Missing required fields." });
    }

    const attachmentsMeta = (req.files || []).map((f) => ({
      filename: f.filename,
      path: f.path,
      mimetype: f.mimetype,
      size: f.size,
      originalname: f.originalname,
    }));

    // save to DB
    const saved = await ContactForm.create({
      name,
      companyName,
      email,
      contact,
      message,
      location,
      services,
      subscribe: subscribe === "true" || subscribe === true,
      attachments: attachmentsMeta,
    });

    // send email (attachments will be passed)
    await sendEmail(
      {
        name,
        companyName,
        email,
        contact,
        message,
        location,
        services,
        subscribe: subscribe === "true" || subscribe === true,
      },
      req.files
    );

    res.status(201).json({ success: true, message: "Form submitted.", data: saved });
  } catch (error) {
    console.error("Contact route error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
});

export default router;
