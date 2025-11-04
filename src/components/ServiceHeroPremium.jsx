import React from "react";
import cloudImage from "../assets/claude.png"; // <-- your image

const ServiceHeroPremium = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden ">
            {/* 🔵 Blue spot (Left) */}
            <div className="absolute -top-20 -left-10 w-100 h-100 bg-blue-300/40 blur-[90px] rounded-full"></div>

            {/* 🟠 Orange spot (Right) */}
            <div className="absolute bottom-0 right-0 w-100 h-100 bg-orange-300/150 blur-[110px] rounded-full"></div>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-orange-50 opacity-95" />

      {/* Left Dotted "L" Shape */}
<div className="absolute bottom-6 left-3 md:left-8 flex flex-col pb-20">


  {/* Vertical Dots (5) */}
  <div className="flex flex-col gap-[8px] md:gap-[10px]">
    {Array.from({ length: 5 }).map((_, i) => (
      <div
        key={i}
        className="w-[7px] h-[7px] md:w-[10px] md:h-[10px] 
        bg-[#6766d7] rounded-full 
        shadow-[0_0_4px_rgba(103,102,215,0.6)]"
      />
    ))}
  </div>

  {/* Horizontal Dots (6) */}
  <div className="flex gap-[8px] md:gap-[10px] mt-[8px] md:mt-[10px]">
    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="w-[7px] h-[7px] md:w-[10px] md:h-[10px] 
        bg-[#6766d7] rounded-full 
        shadow-[0_0_4px_rgba(103,102,215,0.6)]"
      />
    ))}
  </div>

</div>



      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6">

   <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-8 md:mb-12 text-center">
            Software Solution
          </h2>
        <img
          src={cloudImage}
          alt="Cloud Software"
          className="w-52 sm:w-64 md:w-[420px] lg:w-[480px] object-contain"
        />
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
    </section>
  );
};

export default ServiceHeroPremium;
