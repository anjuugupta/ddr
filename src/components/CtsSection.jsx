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

// Right 3 squares
const rightSquares = [
  { cls: "top-20 right-5", size: 4, color: "border-orange-300" },
  { cls: "top-60 right-10", size: 5, color: "border-indigo-500" },
  { cls: "top-100 right-8", size: 3, color: "border-orange-300" },
];

const CtaSection = () => {
  return (
    <section className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative squares (hidden on mobile) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
        {/* Left squares */}
        {leftSquares.map((sq, i) => (
          <motion.div
            key={`left-${i}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={squareVariants}
            className={`absolute border-2 rounded-lg ${sq.cls}`}
            style={{
              width: `${sq.size}vw`,
              height: `${sq.size}vw`,
            }}
          />
        ))}
        {/* Right squares */}
        {rightSquares.map((sq, i) => (
          <motion.div
            key={`right-${i}`}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={squareVariants}
            className={`absolute rounded-lg ${sq.color} border-2 ${sq.cls}`}
            style={{
              width: `${sq.size}vw`,
              height: `${sq.size}vw`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={contentVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#383B97]"
        >
          Get Payroll Outsourcing Services starting at{" "}
          <span className="text-[#383B97]">₹7,500/month</span>
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={contentVariants}
          transition={{ delay: 0.3 }}
          className="mt-4 text-black text-base sm:text-lg"
        >
          Including payroll software with mobile attendance, biometric attendance, and face reader attendance, along with payroll processing and payroll compliance (PF, ESIC, PT & LWF return), 24Q TDS return filing, and Form 16 generation.
</motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={contentVariants}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-2xl bg-[#383B97] text-white font-semibold text-lg shadow-lg hover:bg-indigo-700 transition transform duration-300"
            >
              Choose Your Services Now
            </a>
            <a
              href="tel:+91-XXXXXXXXXX"
              className="inline-block px-6 py-3 rounded-2xl bg-[#383B97] text-white font-semibold text-lg shadow-lg hover:bg-indigo-700 transition transform duration-300"
            >
              Call Now
            </a>
          </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
