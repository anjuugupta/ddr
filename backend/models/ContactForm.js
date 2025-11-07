// models/ContactForm.js
import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    companyName: { type: String },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    message: { type: String, required: true },
    location: { type: String },
    services: { type: String },
    subscribe: { type: Boolean, default: false },
    attachments: [{ filename: String, path: String, mimetype: String, size: Number }],
  },
  { timestamps: true }
);

export default mongoose.model("ContactForm", contactFormSchema);
