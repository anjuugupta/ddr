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

  const slides = [
    { left: calnder, center: dashboard, right: cal },
    { left: dashboard, center: cal, right: calnder },
    { left: cal, center: calnder, right: dashboard },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="min-h-screen py-24 relative overflow-hidden flex flex-col justify-center">
        {/* Heading */}
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

        {/* Desktop View */}
        <div className="hidden lg:flex items-center justify-center gap-6 px-6 max-w-7xl mx-auto w-full">
          <AnimatePresence mode="wait">
            <motion.div key={currentSlide} className="flex items-center justify-center gap-6 w-full">
              
              {/* Left Image */}
              <motion.img
                src={slides[currentSlide].left}
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-1/4 max-w-xs rounded-xl shadow-xl"
                alt="Left"
              />

              {/* Center Image */}
              <motion.img
                src={slides[currentSlide].center}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-1/3 max-w-lg rounded-xl shadow-2xl"
                alt="Center"
              />

              {/* Right Image */}
              <motion.img
                src={slides[currentSlide].right}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 80, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-1/4 max-w-xs rounded-xl shadow-xl"
                alt="Right"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile & Tablet Carousel */}
        <div className="lg:hidden block px-4 mt-6">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentSlide}
              src={slides[currentSlide].center}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-md mx-auto rounded-xl shadow-2xl"
              alt="Slide"
            />
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? "bg-orange-500 w-8" : "bg-gray-400 w-3"
              }`}
            ></button>
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
