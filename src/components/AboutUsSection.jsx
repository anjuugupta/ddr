import React, { useState, useEffect, useRef } from 'react';

export default function AboutUsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.7 && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 0,100 Q 50,50 100,100 T 200,100" stroke="#FF9F66" strokeWidth="3" fill="none" />
          <path d="M 0,120 Q 50,70 100,120 T 200,120" stroke="#6B7FD7" strokeWidth="3" fill="none" />
        </svg>
      </div>

      <div className="absolute bottom-0 right-0 w-96 h-96">
        <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-orange-400 to-transparent rounded-tl-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-indigo-900 mb-4">
            About Us
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
          }`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              At DDR Management Outsourcing Services
            </h3>
            
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              At DDR Management Outsourcing Services, we are committed to simplifying 
              and streamlining business operations for organizations across industries. 
              Our mission is to be a trusted partner in helping businesses achieve greater 
              efficiency, compliance, and productivity while allowing them to focus on 
              their core competencies.
            </p>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              With over 15 years of experience in the industry, we offer a comprehensive 
              suite of outsourcing solutions tailored to meet the diverse needs of our 
              clients. Whether you are a startup or a well-established organization, our 
              expertise ensures that your business runs smoothly and complies with the 
              ever-evolving regulatory landscape.
            </p>

            <div className="pt-4">
              <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                Our Services Include:
              </h4>
              <ul className="space-y-3">
                {[
                  'Payroll Processing',
                  'Compliance Management',
                  'TDS Return Filing',
                  'Asset Depreciation Calculation'
                ].map((service, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                    <span className="text-gray-700 text-base sm:text-lg">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed pt-4">
              We cater to businesses across industries, providing reliable and efficient 
              solutions to support your growth and operational needs.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 sm:w-40 sm:h-40 opacity-40 z-0">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <path d="M 0,100 Q 50,50 100,100 T 200,100" stroke="#FF9F66" strokeWidth="4" fill="none" />
                  <path d="M 0,120 Q 50,70 100,120 T 200,120" stroke="#6B7FD7" strokeWidth="4" fill="none" />
                </svg>
              </div>

              {/* Orange gradient background */}
              <div className="absolute -top-12 -right-12 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-br from-orange-400 to-orange-300 rounded-tl-[100px] opacity-40 -z-10"></div>

              {/* Main Image Container */}
              <div className="relative rounded-[60px] overflow-hidden border-4 border-indigo-600 shadow-2xl max-w-md mx-auto lg:mx-0">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Business professionals collaborating"
                  className="w-full h-auto object-cover"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
              </div>

              {/* Bottom decorative curve */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 opacity-30 z-0">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path d="M 0,50 Q 25,25 50,50 T 100,50" stroke="#FF9F66" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}