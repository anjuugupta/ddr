import React from "react";
import { motion } from "framer-motion";   // ✅ Missing import added

import dashboard from "../assets/website.png"
import cal from "../assets/right.png"
import calnder from "../assets/left.png"
import TechAndFeaturesSection from "../components/TechAndFeaturesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";

const expertiseData = [
  {
    id: "01",
    title: "Corporate / Business Websites",
    desc: "Professional websites that reflect your brand, values, and services.",
    color: "bg-orange-100",
  },
  {
    id: "02",
    title: "E-Commerce Websites",
    desc: "Secure, feature-rich stores with payment gateway & inventory integration.",
    color: "bg-blue-100",
  },
  {
    id: "03",
    title: "Portfolio & Personal Websites",
    desc: "Elegant websites to showcase skills, achievements, and projects.",
    color: "bg-yellow-100",
  },
  {
    id: "04",
    title: "Custom Web Portals",
    desc: "HRMS, Payroll, Accounting, Compliance and tailored business portals.",
    color: "bg-purple-100",
  },
  {
    id: "05",
    title: "Landing Pages & Marketing Sites",
    desc: "High-converting landing pages for leads & campaigns.",
    color: "bg-amber-100",
  },
];

const WebsiteSalutions = () => {

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-orange-50 py-28 relative overflow-hidden">
        {/* Background Heading */}
        <div className="text-center mb-12 px-4">
        
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-8 md:mb-12 text-center">
           Website Solution
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto">
            "In today's digital world, your website is your business's first impression. We deliver premium, secure, and modern website solutions that make your brand stand out, attract customers, and run efficiently."
          </p>
        </div>

        {/* Left Dotted L Shape */}
        <div className="absolute bottom-6 left-3 md:left-8 pb-30 ">
          {/* Vertical Dots */}
          <div className="flex flex-col gap-2 md:gap-2.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="w-2 h-2 md:w-2.5 md:h-2.5 bg-indigo-600 rounded-full shadow-md"
              />
            ))}
          </div>
          {/* Horizontal Dots */}
          <div className="flex gap-2 md:gap-2.5 mt-2 md:mt-2.5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="w-2 h-2 md:w-2.5 md:h-2.5 bg-indigo-600 rounded-full shadow-md"
              />
            ))}
          </div>
        </div>

        {/* Image Section - Calendar Left, Dashboard Center, Calendar Right */}
        <div className="relative  flex items-center justify-center px-4 md:px-8">
          <div className="relative flex items-center justify-center max-w-7xl w-full">

            {/* Left Calendar - Overflow */}
            <div className="absolute left-0 transform -translate-x-1/3 z-10 hidden lg:block">
              <img
                src={calnder}
                alt="Calendar"
                className="w-64 xl:w-80 "
              />
            </div>

            {/* Center Dashboard - Main Focus */}
            <div className="relative  mx-auto">
              <img
                src={dashboard}
                alt="Dashboard"
                className="w-full max-w-3xl "
              />
            </div>

            {/* Right Calendar - Overflow */}
            <div className="absolute right-0 transform translate-x-1/3 z-10 hidden lg:block">
              <img
                src={cal}
                alt="Calendar"
                className="w-64 xl:w-80 "
              />
            </div>

          </div>
        </div>

        {/* Mobile View - Stacked */}
        <div className="lg:hidden relative z-10 px-4 space-y-6 mt-8">
          <div className="mx-auto max-w-md">
            <img
              src={calnder}
              alt="Calendar"
              className="w-full rounded-2xl shadow-xl border-4 border-white"
            />
          </div>
          <div className="mx-auto max-w-2xl">
            <img
              src={dashboard}
              alt="Dashboard"
              className="w-full rounded-2xl shadow-xl border-4 border-white"
            />
          </div>
          <div className="mx-auto max-w-md">
            <img
              src={cal}
              alt="Calendar"
              className="w-full rounded-2xl shadow-xl border-4 border-white"
            />
          </div>
        </div>

        {/* Bottom Blue Wave */}
        <div className="absolute bottom-0 left-0 w-full z-0">
          <svg
            viewBox="0 0 1440 200"
            className="w-full h-24 md:h-32 lg:h-40"
            preserveAspectRatio="none"
          >
            <path
              d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,106.7C1120,85,1280,75,1360,69.3L1440,64L1440,200L1360,200C1280,200,1120,200,960,200C800,200,640,200,480,200C320,200,160,200,80,200L0,200Z"
              fill="#1e3a8a"
            />
          </svg>
        </div>
      </div>

      <div
      className="p-10"
      >
        {/* Expertise Cards */}
         <div className="text-center mb-12 sm:mb-14 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#383B97] mb-3 sm:mb-4">
          Our Expertise
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed max-w-3xl mx-auto">
         We build all types of websites to suit your business and personal needs:
        </p>
      </div>
      <div className="relative">
  {/* 🔵 Blue Spot – Right Side */}
  <div className="hidden md:block absolute bottom-10 left-0 w-56 h-56 bg-orange-400/20 blur-[90px] rounded-full"></div>
  <div className="hidden md:block absolute top-10 right-0 w-60 h-60 bg-blue-500/20 blur-[90px] rounded-full"></div>

  {/* 🟠 Orange Spot – Left Side */}

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 mb-20 relative z-10">
    {expertiseData.map((item, index) => (
      <motion.div
        key={item.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.5 }}
        className={`${item.color} p-5 rounded-xl shadow-md hover:shadow-lg transition-all`}
      >
        <div className="flex items-center gap-3 mb-2">
          <span className="bg-black text-white text-xs w-7 h-7 flex items-center justify-center rounded-full font-semibold">
            {item.id}
          </span>
          <h3 className="font-semibold text-gray-800 text-sm md:text-base">
            {item.title}
          </h3>
        </div>
        <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</div>

      </div>

      <TechAndFeaturesSection/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  );
};

export default WebsiteSalutions;
