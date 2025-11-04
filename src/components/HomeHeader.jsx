import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import dashboard from "../assets/dashboard.png";
import cal from "../assets/cal.png";
import calnder from "../assets/calnder.png";
import TechAndFeaturesSection from "./TechAndFeaturesSection";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "./Footer";

const HomeHeader = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slides configuration
  const slides = [
    {
      left: calnder,
      center: dashboard,
      right: cal,
    },
    {
      left: dashboard,
      center: cal,
      right: calnder,
    },
    {
      left: cal,
      center: calnder,
      right: dashboard,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-orange-50 py-28 relative overflow-hidden">
        {/* Background Heading */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-2">
            Website Solution
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto">
            "In today's digital world, your website is your business's first impression. 
            We deliver premium, secure, and modern website solutions that make your brand stand out, 
            attract customers, and run efficiently."
          </p>
        </div>

        {/* Image Section with Carousel Animations */}
        <div className="relative flex items-center justify-center px-4 md:px-8 overflow-hidden">
          <div className="relative flex items-center justify-center max-w-7xl w-full h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* Left Image */}
                <motion.div
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -200, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="absolute left-20 transform -translate-x-1/3 z-10 hidden lg:block"
                >
                  <img src={slides[currentSlide].left} alt="Left" className="w-64 xl:w-80 rounded-2xl shadow-2xl" />
                </motion.div>

                {/* Center Image */}
                <motion.div
                  initial={{ y: 100, opacity: 0, scale: 0.8 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -100, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                  className="relative mx-auto z-20"
                >
                  <img src={slides[currentSlide].center} alt="Center" className="w-full max-w-3xl rounded-2xl shadow-2xl" />
                </motion.div>

                {/* Right Image */}
                <motion.div
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 200, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                  className="absolute right-30 transform translate-x-1/3 z-10 hidden lg:block"
                >
                  <img src={slides[currentSlide].right} alt="Right" className="w-64 xl:w-80 rounded-2xl shadow-2xl" />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden relative z-10 px-4 mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="space-y-6"
            >
              <motion.div
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -150, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="mx-auto max-w-md"
              >
                <img src={slides[currentSlide].left} alt="Left" className="w-full rounded-2xl shadow-xl border-4 border-white" />
              </motion.div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                className="mx-auto max-w-2xl"
              >
                <img src={slides[currentSlide].center} alt="Center" className="w-full rounded-2xl shadow-xl border-4 border-white" />
              </motion.div>

              <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 150, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                className="mx-auto max-w-md"
              >
                <img src={slides[currentSlide].right} alt="Right" className="w-full rounded-2xl shadow-xl border-4 border-white" />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-orange-500 w-8" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      <TechAndFeaturesSection />
      <WhyChooseUs />
      <Footer />
    </div>
  );
};

export default HomeHeader;