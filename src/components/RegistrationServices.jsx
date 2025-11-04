import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  FileSpreadsheet,
  BadgeCheck,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import registor from "../assets/registor.png"

const services = [
  { icon: <FileText className="w-5 h-5 text-[#ff9433]" />, title: "PF REGISTRATION" },
  { icon: <FileSpreadsheet className="w-5 h-5 text-[#ff9433]" />, title: "PT REGISTRATION" },
  { icon: <ClipboardList className="w-5 h-5 text-[#ff9433]" />, title: "LWF REGISTRATION" },
  { icon: <ShieldCheck className="w-5 h-5 text-[#ff9433]" />, title: "ESIC REGISTRATION" },
  { icon: <BadgeCheck className="w-5 h-5 text-[#ff9433]" />, title: "LABOUR CONTRACTOR LICENSE" },
];

export default function RegistrationServices() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#f9f9ff] to-white">
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-[#202261] mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Registration Services
      </motion.h2>

      {/* Content Box */}
      <motion.div
        className="relative max-w-6xl mx-auto bg-[#ff9433]/90 text-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left List */}
        <div className="w-full md:w-1/2 space-y-4 z-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-3 bg-white text-gray-800 rounded-xl px-5 py-4 shadow-md hover:shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-2 bg-[#fff4ec] rounded-lg">{service.icon}</div>
              <p className="text-sm md:text-base font-semibold">{service.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center relative"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute -inset-6 bg-[#ff9433]/10 rounded-[2rem] blur-2xl"></div>
          <img
            src={registor}
            alt="Registration Illustration"
            className="w-[350px] md:w-[420px] relative z-10 object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
