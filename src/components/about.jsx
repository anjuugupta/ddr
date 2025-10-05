import React, { useState, useEffect } from 'react';
import about from "../assets/about.jpg"

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-white py-12 px-6 md:px-16 lg:px-24 overflow-x-hidden">
      {/* Heading */}
      <div className="flex items-center justify-center mb-10">
        <h1 
          className={`text-4xl font-semibold text-[#383B97] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          About Us
        </h1>
      </div>

      <div className= " flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side Content */}
        <div 
          className={` lg:w-1/2 text-left lg:text-left transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            At DDR Management Outsourcing Services
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            At DDR Management Outsourcing Services, we are committed to simplifying
            and streamlining business operations for organizations across industries.
            Our mission is to be a trusted partner in helping businesses achieve
            greater efficiency, compliance, and productivity while allowing them to
            focus on their core competencies.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            With over 15 years of experience in the industry, we offer a
            comprehensive suite of outsourcing solutions tailored to meet the
            diverse needs of our clients. Whether you are a startup or a
            well-established organization, our expertise ensures that your business
            runs smoothly and complies with the ever-evolving regulatory landscape.
          </p>

          <h3 className="text-lg font-semibold mb-3">Our Services Include:</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Payroll Processing</li>
            <li>Compliance Management</li>
            <li>TDS Return Filing</li>
            <li>Asset Depreciation Calculation</li>
          </ul>

          <p className="text-gray-700">
            We cater to businesses across industries, providing reliable and
            efficient solutions to support your growth and operational needs.
          </p>
        </div>

        {/* Right Side Image + Background Shapes */}
        <div 
          className={`relative lg:w-1/2 flex justify-center items-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          {/* Image + BG Shapes wrapper */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rotate-45 flex items-center justify-center">
            {/* Orange background shape (behind image) */}
            <div 
              className="absolute w-[520px] h-[520px] bg-[#FF9433C4] rounded-3xl -z-10 rotate-450"
              style={{ 
                top: '-260px',
                right: '-300px',
                transform: 'rotate(445deg)'
              }}
            ></div>

            {/* Diamond Image */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl border-4 border-blue-600 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-500">
              <img
                src={about}                alt="About DDR Management"
                className="-rotate-45 w-full h-full object-cover scale-150"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Boxes on Left Side */}
      <div 
        className={`absolute -left-20 top-1/3 hidden md:flex flex-col gap-10 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}
      >
        {/* First Box - Blue */}
        <div 
          className="w-30 h-30 border-4 -rotate-45 border-[#6163BEE3] rounded-3xl bg-white relative z-20 animate-pulse-slow"
          style={{ animationDuration: '3s' }}
        ></div>

        {/* Middle Box (behind both) - Blue */}
        <div 
          className="w-32 h-32 border-4 -rotate-45 border-[#6163BEE3] rounded-3xl bg-white relative -top-[80px] left-8 z-0 animate-pulse-slow"
          style={{ animationDuration: '3.5s' }}
        ></div>

        {/* Second Box - Orange */}
        <div 
          className="w-30 h-30 border-4 -rotate-45 border-orange-300 rounded-3xl bg-white relative -top-[160px] z-10 animate-pulse-slow"
          style={{ animationDuration: '4s' }}
        ></div>
      </div>

    
    </section>
  );
}