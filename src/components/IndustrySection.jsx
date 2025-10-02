import React, { useState, useEffect, useRef } from 'react';
import education from "../assets/education.jpg";
import factories from "../assets/factories.jpg";
import healthcare from "../assets/healthcare.jpg";
import hospital from "../assets/hospital.png";

export default function IndustrySection() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const sectionRef = useRef(null);

    const industries = [
        {
            title: "Educational Industry",
            description: "Comprehensive payroll and attendance solutions for schools, colleges, and universities covering teaching and non-teaching staff.",
            image: education,
        },
        {
            title: "Factories & Manufacturing Units",
            description: "Payroll processing for workers and staff with complete statutory compliance including PF, ESIC, and labor law requirements.",
            image: factories,
        },
        {
            title: "Hospitality Industry",
            description: "We specialize in hotel payroll processing and asset data management, ensuring accurate compliance, streamlined depreciation, and audit-ready reports.",
            image: hospital,
        },
        {
            title: "Healthcare Industry",
            description: "We specialize in hospital payroll processing and asset data management, ensuring accurate compliance, streamlined depreciation, and audit-ready reports.",
            image: healthcare,
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight * 0.6 && rect.bottom > 0;
                setIsExpanded(isInView);
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isMobile = () =>
        typeof window !== 'undefined' && window.innerWidth < 640;

    return (
        <div
            ref={sectionRef}
            className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-2 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <h2 className="text-lg sm:text-3xl md:text-5xl font-bold text-center text-indigo-900 p-30 sm:mb-40 px-2">
                    Comprehensive Payroll & Attendance Solutions for Every Industry
                </h2>
                <div className="relative min-h-[550px] flex flex-col items-center justify-center">
                    {/* Desktop/Tablet Center text overlay */}
                    <div className="absolute inset-0 sm:flex items-center -mt-32 justify-center z-10 pointer-events-none hidden">
                        <div className="text-center max-w-sm px-8">
                            {activeIndex !== null && (
                                <div className="animate-fadeIn">
                                    <h3 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
                                        {industries[activeIndex].title}
                                    </h3>
                                    <p className="text-base md:text-lg text-gray-700">
                                        {industries[activeIndex].description}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* Circular image arrangement */}
                    <div
                        className={`relative w-full h-[350px] sm:h-full transition-all p-2 sm:p-10 duration-1000 mb-50 ${isExpanded ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {industries.map((industry, index) => {
                            const angle = (index * 360) / industries.length;
                            const radius = isExpanded ? 90 : 0; // mobile radius
                            const radiusLg = isExpanded ? 280 : 0; // desktop radius
                            const x = `calc(-50% + ${isMobile()
                                    ? Math.cos((angle * Math.PI) / 180) * radius
                                    : Math.cos((angle * Math.PI) / 180) * radiusLg
                                }px)`;
                            const y = `calc(-50% + ${isMobile()
                                    ? Math.sin((angle * Math.PI) / 180) * radius
                                    : Math.sin((angle * Math.PI) / 180) * radiusLg
                                }px)`;
                            return (
                                <div
                                    key={index}
                                    className={`absolute top-1/2 left-1/2 transition-all duration-1000 ease-out cursor-pointer ${isExpanded ? 'scale-100' : 'scale-0'
                                        }`}
                                    style={{
                                        transform: `translate(${x}, ${y})`,
                                        transitionDelay: `${index * 100}ms`,
                                    }}
                                    onMouseEnter={() => !isMobile() && setActiveIndex(index)}
                                    onMouseLeave={() => !isMobile() && setActiveIndex(null)}
                                    onClick={() =>
                                        isMobile()
                                            ? setActiveIndex(index === activeIndex ? null : index)
                                            : null
                                    }
                                    tabIndex={0}
                                    onFocus={() => setActiveIndex(index)}
                                    onBlur={() => !isMobile() && setActiveIndex(null)}
                                >
                                    <div className="relative group">
                                        {/* Glow */}
                                        <div
                                            className={`absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-xl transition-opacity duration-300 ${activeIndex === index ? 'opacity-75' : 'opacity-0'
                                                }`}
                                        ></div>
                                        {/* Image */}
                                        <div
                                            className={`relative w-28 h-28 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full overflow-hidden border-4 transition-all duration-500 ${activeIndex === index
                                                    ? 'border-indigo-500 scale-110 shadow-2xl'
                                                    : 'border-orange-300 scale-100 shadow-lg'
                                                }`}
                                        >
                                            <div className="absolute inset-0 rounded-full border-8 border-indigo-400 opacity-50"></div>
                                            <div className="absolute inset-0 rounded-full border-8 border-orange-300 opacity-30"></div>
                                            <img
                                                src={industry.image}
                                                alt={industry.title}
                                                className={`w-full h-full object-cover transition-all duration-500 ${activeIndex === index ? 'grayscale-0' : 'grayscale'
                                                    }`}
                                            />
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-t from-indigo-900/50 to-transparent transition-opacity duration-500 ${activeIndex === index ? 'opacity-0' : 'opacity-60'
                                                    }`}
                                            ></div>
                                        </div>
                                        {/* Title under image */}
                                        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-32 sm:w-48">
                                            <p className="text-center text-xs sm:text-sm font-semibold text-gray-800">
                                                {industry.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* Mobile: centralized description below images circle */}
                    {isMobile() && activeIndex !== null && (
                        <div className="mt-6 max-w-md px-4 text-center">
                            <h3 className="text-xl font-bold text-indigo-900 mb-3">
                                {industries[activeIndex].title}
                            </h3>
                            <p className="text-gray-700 text-sm">{industries[activeIndex].description}</p>
                        </div>
                    )}
                </div>
            </div>
            <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
        </div>
    );
}
