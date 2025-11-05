// ✅ YOUR ORIGINAL CODE (ONLY WAVE ADDED AT BOTTOM)

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import swift from "../assets/oneslide/swift.png";
import circle from "../assets/oneslide/circle.png";
import gender from "../assets/oneslide/gender.png";
import bar from "../assets/oneslide/bar.png";
import inout from "../assets/oneslide/inout.png";

import desh from "../assets/twoslide/deshboardsec.png";
import emp from "../assets/twoslide/employee.png";
import cal from "../assets/twoslide/calender.png";
import todo from "../assets/twoslide/todo.png";
import inoutsec from "../assets/twoslide/inout.png";

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showExtras, setShowExtras] = useState(false);
  const [slideOut, setSlideOut] = useState(false);

  const slides = [
    {
      center: swift,
      items: [
        { src: circle, className: "absolute left-[3%] top-[5%] md:left-[8%] md:top-[0%] z-20" },
        { src: inout, className: "absolute left-[8%] top-[40%] md:left-[14%] md:top-[38%] z-20" },
        { src: gender, className: "absolute right-[3%] top-[5%] md:right-[8%] md:top-[2%]" },
        { src: bar, className: "absolute right-[6%] top-[55%] md:right-[12%] md:top-[50%] z-20" },
      ],
    },
    {
      center: desh,
      items: [
        { src: cal, className: "absolute left-[3%] top-[5%] md:left-[8%] md:top-[0%]" },
        { src: emp, className: "absolute left-[8%] top-[40%] md:left-[14%] md:top-[38%] z-20" },
        { src: todo, className: "absolute right-[3%] top-[5%] md:right-[8%] md:top-[2%]" },
        { src: inoutsec, className: "absolute right-[6%] top-[55%] md:right-[12%] md:top-[50%] z-20" },
      ],
    },
  ];

  useEffect(() => {
    setShowExtras(false);
    setSlideOut(false);

    const timer1 = setTimeout(() => setShowExtras(true), 3000);
    const timer2 = setTimeout(() => setSlideOut(true), 8000);
    const timer3 = setTimeout(
      () => setCurrentSlide((prev) => (prev + 1) % slides.length),
      8500
    );

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-orange-50 py-28 relative overflow-hidden">

      {/* ORANGE GLOW SPOT RIGHT SIDE */}
      <div className="absolute right-0 top-1/3 w-[260px] h-[260px] bg-orange-400 rounded-full blur-[120px] opacity-40 pointer-events-none"></div>

      <div className="text-center mb-12 px-4 relative z-20 pt-15">
        <h2 className="text-2xl md:text-xl font-semibold text-orange-500 mb-2">
          <span className="text-[#1F215F] text-5xl font-bold">DDR MANAGEMENT </span> <br />
          <span className="text-[#4044C5] font-bold">OUTSOURCING</span>
          <span className="font-bold"> SERVICES</span>
        </h2>
      </div>

      <div className="relative flex items-center justify-center px-4 md:px-8 overflow-hidden">
        <div className="relative flex items-center justify-center max-w-7xl w-full h-[420px] sm:h-[480px] md:h-[520px] lg:h-[550px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: 0, opacity: 1 }}
              animate={slideOut ? { x: -300, opacity: 0 } : { x: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {/* Center Image */}
              <motion.img
                src={slides[currentSlide].center}
                alt="Center"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-20 w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] rounded-2xl shadow-2xl"
              />

              {/* Extra Images */}
              {showExtras &&
                slides[currentSlide].items.map((item, index) => (
                  <motion.img
                    key={index}
                    src={item.src}
                    alt=""
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.3 }}
                    className={`${item.className} hidden sm:block w-[100px] md:w-[150px] lg:w-[220px]`}
                  />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex justify-center gap-2 -mt-11 z-30 relative">
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
  );
};

export default HeroBanner;
