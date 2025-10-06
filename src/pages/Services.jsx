import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Download, FileText, CheckCircle } from "lucide-react";
import Footer from "../components/Footer";

// Dummy data array for pages
const pages = [
  { image: "/service-page-1.png", alt: "Service Page 1", title: "Payroll Processing" },
  { image: "/service-page-2.png", alt: "Service Page 2", title: "Payroll Compliance" },
  { image: "/service-page-3.png", alt: "Service Page 3", title: "TDS Return Filing" },
  // Add more pages as needed
];

const TOTAL_PAGES = pages.length || 3;

export default function Services() {
  const [pageIndex, setPageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goNext = () => {
    if (pageIndex < TOTAL_PAGES - 1 && !isAnimating) {
      setIsAnimating(true);
      setPageIndex(prev => prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goPrev = () => {
    if (pageIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setPageIndex(prev => prev - 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToPage = (index) => {
    if (index !== pageIndex && !isAnimating) {
      setIsAnimating(true);
      setPageIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div>

    <div className="min-h-screen  relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-10 right-20 w-20 h-20 border-4 border-indigo-400/30 rotate-45 animate-bounce" style={{ animationDuration: '3s' }}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 border-4 border-purple-400/30 rotate-12" style={{ animation: 'spin 8s linear infinite' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-lg rotate-45" style={{ animation: 'pulse 4s ease-in-out infinite' }}></div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 space-y-4">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
              <FileText size={18} />
              <span>Professional Services</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#202261D6] via-[#ff9433c4] to-[#FF9433C4] bg-clip-text text-transparent mb-4">
            Our Services
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-3xl mx-auto">
            Comprehensive Solutions for Your Business
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm md:text-base text-gray-600">
            {["Payroll Processing", "Payroll Compliance", "TDS Return Filing"].map((service, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <CheckCircle size={16} className="text-green-500" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Viewer with Navigation */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FF9433C4] via-[#202261D6] to-[#FF9433C4] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>
              
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 md:p-8">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <img
                    src={pages[pageIndex]?.image || "/api/placeholder/400/500"}
                    alt={pages[pageIndex]?.alt || "Service"}
                    className={`w-full h-full object-contain transition-all duration-500 ${
                      isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                    }`}
                  />
                  
                  {/* Navigation Arrows Overlay */}
                  <button
                    onClick={goPrev}
                    disabled={pageIndex === 0}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft size={24} className="text-indigo-600" />
                  </button>
                  
                  <button
                    onClick={goNext}
                    disabled={pageIndex === TOTAL_PAGES - 1}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronRight size={24} className="text-indigo-600" />
                  </button>
                </div>

                {/* Dot Navigation */}
                <div className="flex items-center justify-center gap-2 mt-6">
                  {Array.from({ length: TOTAL_PAGES }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => goToPage(idx)}
                      className={`transition-all rounded-full ${
                        idx === pageIndex
                          ? 'w-8 h-3 bg-gradient-to-r from-[#202261D6] to-[#FF9433C4]'
                          : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>

                {/* Page Counter */}
                <div className="text-center mt-4">
                  <span className="text-sm font-semibold text-gray-600">
                    Page <span className="text-[#FF9433C4] text-lg">{pageIndex + 1}</span> of {TOTAL_PAGES}
                  </span>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-white">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Detailed Service Information
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  We've compiled comprehensive information about all our services in an easy-to-read format. 
                  Download the complete services chart to explore our offerings, compare packages, and find 
                  the perfect solution for your business needs.
                </p>

                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {[
                    "Complete service breakdown",
                    "Package comparisons",
                    "Pricing details",
                    "Implementation timeline"
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#202261D6] to-[#FF9433C4] flex items-center justify-center flex-shrink-0">
                        <CheckCircle size={16} className="text-white" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Download Button */}
                <a
                  href="/services-chart.pdf"
                  download
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#202261D6] to-[#FF9433C4] text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden w-full justify-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#202261D6] to-[#FF9433C4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Download size={24} className="relative z-10 group-hover:animate-bounce" />
                  <span className="relative z-10">Download Services Chart</span>
                </a>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Services", value: "22+" },
                  { label: "Clients", value: "500+" },
                  { label: "Years", value: "10+" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white hover:shadow-xl transition-shadow">
                    <div className="text-3xl font-bold bg-gradient-to-r from-[#202261D6] to-[#FF9433C4] bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}