import React from "react";
import { motion } from "framer-motion";

const squareVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      duration: 1.2,
      ease: "easeOut",
    },
  }),
};

const contentVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// Left 10 squares
const leftSquares = [
  { cls: "border-orange-300 -top-15 -left-5", size: 4 },
  { cls: "border-indigo-500 top-2 left-10", size: 5 },
  { cls: "border-orange-300 top-28 -left-5", size: 3 },
  { cls: "border-indigo-500 top-36 left-5 bg-white", size: 6 },
  { cls: "border-orange-300 top-28 left-22 bg-white", size: 4 },
  { cls: "border-orange-300 top-50 left-20 bg-white", size: 5 },
  { cls: "border-orange-300 top-5 left-38", size: 3 },
  { cls: "border-indigo-500 top-60 left-30 bg-white", size: 4 },
  { cls: "border-orange-300 top-96 left-5", size: 5 },
  { cls: "border-indigo-500 top-110 left-8", size: 3 },
];



const CtaSection = () => {
  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={contentVariants}
          className="text-xl sm:text-3xl md:text-3xl font-bold text-[#383B97]"
        >
          Get Payroll Outsourcing Services starting at{" "}
          <span className="relative text-[#383B97] inline-block">
            ₹7,500/month
            <span className="absolute  -right-3 text-red-500 text-xl">*</span>
          </span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={contentVariants}
          transition={{ delay: 0.3 }}
          className="mt-4 text-black text-base sm:text-lg"
        >
(Includes Web HRM Software + Employee Self-Service (ESS) access +Payroll Processing+Mobile Attendance+Payroll Compliance+TDS Return Filing+Form 16 Generation)</motion.p>
       <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  variants={contentVariants}
  transition={{ delay: 0.6 }}
  className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
>
  {/* ✅ WhatsApp Button */}
<a
  href="https://wa.me/919987320764"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#383B97] text-white font-semibold text-lg shadow-lg hover:bg-[#2e317d] transition transform duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-6 h-6"
  >
    <path d="M16.2 13.3c-.3-.2-1.7-.8-1.9-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-.9 1.1-.2.2-.3.3-.6.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.4.1-.1.2-.2.3-.4.1-.2.1-.3 0-.5-.1-.2-.7-1.7-1-2.3-.3-.5-.5-.4-.7-.4h-.6c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.3 3.9.6.3 1 .5 1.3.6.5.2.9.2 1.2.1.4-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.1-1.3-.2-.2-.4-.3-.7-.4zM12 2C6.5 2 2 6.4 2 11.9c0 2.1.6 4.1 1.8 5.8L2 22l4.4-1.4c1.6.9 3.4 1.4 5.3 1.4 5.5 0 10-4.4 10-9.9C21.9 6.4 17.5 2 12 2z" />
  </svg>
  WhatsApp Now
</a>


  {/* 📞 Call Now Button */}
  <a
    href="tel:+91-9987320764"
    className="inline-block px-6 py-3 rounded-2xl bg-[#383B97] text-white font-semibold text-lg shadow-lg hover:bg-indigo-700 transition transform duration-300"
  >
    Call Now
  </a>

<a
  href="mailto:rupesh.tech1224@gmail.com"
  className="inline-block px-6 py-3 rounded-2xl bg-[#383B97] text-white font-semibold text-lg shadow-lg hover:bg-[#2e317d] transition transform duration-300"
>
  Apply for Job
</a>

</motion.div>

      </div>
    </section>
  );
};

export default CtaSection;
