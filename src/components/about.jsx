import React, { useState, useEffect } from 'react';
import about from "../assets/about.jpg";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-white py-12 px-6 md:px-16 lg:px-24 overflow-hidden mt-20">
      {/* Heading */}
      <div className="flex items-center justify-center mb-10">
        <h1
          className={`text-4xl font-semibold text-[#383B97] transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
        >
          About Us
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left Side Content */}
        <div
          className={`lg:w-1/2 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
        >
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            At DDR Management Outsourcing Services
          </h2>
          <p>
            Your Trusted Partner in Payroll, HRMS, and Digital Solutions


          </p>
          <br />
          <p className="leading-relaxed mb-4">
            DDR Management Outsourcing is a professionally managed partnership firm with over 15 years of expertise in Payroll Outsourcing, HRMS Implementation, Software Solutions, and Website Development Services.


          </p>
          <br />
          <p className="leading-relaxed mb-4">
            We specialize in delivering accurate and compliant payroll processing, statutory management (PF, ESIC, PT, LWF, and TDS), and comprehensive HRMS implementation support. Our services are designed to help organizations streamline operations, ensure compliance, and enhance efficiency.

          </p>
          <br />
          <p>

            With a strong focus on quality, confidentiality, and timely delivery, our experienced team combines domain expertise and modern technology to provide customized outsourcing solutions tailored to each client’s business needs.

          </p>
          <br />
          <p>

            At DDR Management Outsourcing, we believe in building long-term partnerships through reliability, transparency, and excellence — enabling our clients to focus on.
          </p>
          <br />
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
          className={`relative lg:w-1/2 flex justify-center items-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
        >
          {/* Wrapper */}
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 rotate-45 flex items-center justify-center overflow-visible">

            {/* Orange BG Shape (adjusted to prevent overflow) */}
            <div
              className="absolute w-[450px] h-[450px] bg-[#B6B7FA] rounded-3xl -z-10"
              style={{
                top: "-200px",
                right: "-180px",
                transform: "rotate(445deg)",
              }}
            ></div>

            {/* Image */}
            <div className="relative w-full h-full overflow-hidden rounded-2xl border-4 border-blue-600 bg-white shadow-xl hover:scale-105 transition-transform duration-500">
              <img
                src={about}
                alt="About DDR Management"
                className="-rotate-45 w-full h-full object-cover scale-150"
              />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
