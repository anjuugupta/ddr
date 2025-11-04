import React from 'react';
import dashboard from "../assets/website.png"
import cal from "../assets/right.png"
import calnder from "../assets/left.png"

const WebsiteSolutionHeader = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-orange-50 py-8 relative overflow-hidden">
      {/* Background Heading */}
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-orange-500 mb-2">
          Website Solution
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto">
          "In today's digital world, your website is your business's first impression. We deliver premium, secure, and modern website solutions that make your brand stand out, attract customers, and run efficiently."
        </p>
      </div>

      {/* Left Dotted L Shape */}
      <div className="absolute bottom-6 left-3 md:left-8 z-0">
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
      <div className="relative  flex top-90 items-center justify-center px-4 md:px-8">
        <div className="relative flex items-center justify-center max-w-7xl w-full">
          
          {/* Left Calendar - Overflow */}
          <div className="absolute left-20 transform -translate-x-1/3 z-10 hidden lg:block">
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
          <div className="absolute right-30 transform translate-x-1/3 z-10 hidden lg:block">
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
  );
};

export default WebsiteSolutionHeader;