import React from "react";
import { motion } from "framer-motion";
import one from "../assets/one.png"
import two from "../assets/two.png"
import three from "../assets/three.png"
import four from "../assets/four.png"
import five from "../assets/five.png"
import six from "../assets/six.png"
import seven from "../assets/seven.png"
import eight from "../assets/eight.png"
import payroll from "../assets/payroll.png"


const services = [
  { title: "PAYROLL PROCESSING (EMPLOYEE SALARY MANAGEMENT & COMPLIANCE)", image: payroll },
  { title: "PF, ESIC, PT AND LWF RETURN FILING", image: two },
  { title: "TDS TCS RETURN FILING (24Q,26Q,27Q &27EQ)", image: three },
  { title: "TDS/TCS REVISE RETURN FILING (24Q,26Q,27Q &27EQ)", image: four },
  { title: "FIXED ASSET MANAGEMENT & DEPRECIATION CALCULATION", image: five },
  { title: "MANPOWER SERVICES", image: six },
  { title: "EMPLOYEE ATTENDANCE MANAGEMENT (OFFICE STAFF, FACTORY WORKERS & MARKETING EMPLOYEES)", image: seven },
  { title: "MOBILE ATTENDANCE (GEO FENCING & TAGGING)", image: eight },
];

export default function ServiceCards() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-[#f9f9ff] to-white">
      <div className="text-center mb-12 sm:mb-14 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#202261] mb-3 sm:mb-4">
          Services
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed max-w-3xl mx-auto">
          “Comprehensive HR and payroll solutions including salary processing,
          statutory return filings, asset management, manpower services, and
          advanced attendance tracking with mobile geo fencing.”
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl border border-gray-100 border-indigo-300 transition-all duration-500"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Image */}
            <div className="h-48 sm:h-52 md:h-48 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover bg-gradient-to-br from-indigo-50 to-purple-50 group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5 text-center">
              <h3 className="text-xs sm:text-sm md:text-[15px] font-semibold text-gray-800 group-hover:text-[#202261] transition-colors leading-snug">
                {service.title}
              </h3>
            </div>

            {/* Gradient Overlay Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#202261]/10 to-[#ff9433]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
