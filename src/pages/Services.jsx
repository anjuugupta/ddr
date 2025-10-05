import React, { useState } from "react";

// Dummy data array for pages; replace with your API or JSON data
const pages = [
  {
    image: "/service-page-1.png",  // Example: use public/static files or dynamic
    alt: "Service Page 1"
  },
  // Add objects for all 22 pages
];

const TOTAL_PAGES = pages.length;

export default function Service() {
  const [pageIndex, setPageIndex] = useState(0);

  const goNext = () => setPageIndex(prev => (prev < TOTAL_PAGES - 1 ? prev + 1 : prev));
  const goPrev = () => setPageIndex(prev => (prev > 0 ? prev - 1 : prev));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#a8aee8] to-white flex flex-col items-center pt-10 pb-4 relative">
      {/* Decorative Diagonal Squares */}
      <div className="absolute top-4 right-4 flex flex-col gap-4 opacity-60 pointer-events-none z-0">
        <div className="w-8 h-8 bg-white border-2 border-blue-200 rotate-45"></div>
        <div className="w-6 h-6 bg-white border-2 border-blue-300 rotate-45 ml-8"></div>
        <div className="w-4 h-4 bg-white border-2 border-blue-100 rotate-45 mt-2"></div>
      </div>

      <div className="max-w-xl w-full z-10">
        <h1 className="text-xl md:text-2xl text-center font-semibold text-[#404a90]">
          More Information About Services
        </h1>
        <p className="text-center mt-1 text-gray-700 text-sm md:text-base">
          Payroll Processing, Payroll Compliance, TDS Return filing
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col md:flex-row items-center justify-center md:gap-8 gap-4 w-full max-w-4xl mx-auto mt-10 md:mt-16">
        {/* Service Image or Card */}
        <div className="rounded-2xl shadow-lg bg-white p-2 max-w-xs w-11/12 h-80 md:h-96 mx-auto mb-2 flex items-center justify-center overflow-hidden border-2 border-indigo-200">
          <img
            src={pages[pageIndex].image}
            alt={pages[pageIndex].alt}
            className="object-contain h-full w-full rounded-xl"
          />
        </div>

        {/* Download section, Instructions */}
        <div className="flex flex-col items-center md:items-start justify-center w-full px-2 py-4">
          <p className="text-center md:text-left text-gray-700 text-sm md:text-base mb-3">
            In the file below, we have provided detailed information on services, so please review everything carefully and compare your package.
          </p>
          <a
            href="/services-chart.pdf" // Provide your file link here
            className="px-4 py-2 rounded-lg bg-[#404a90] text-white text-sm hover:bg-indigo-700 transition"
            download
          >
            Click Here to Download Services Chart
          </a>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-6 mt-6 z-10">
        <button
          onClick={goPrev}
          disabled={pageIndex === 0}
          className="p-2 rounded-full bg-white border shadow-md hover:bg-indigo-100 text-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          &#8592;
        </button>
        <span className="font-semibold">
          {pageIndex + 1} / {TOTAL_PAGES}
        </span>
        <button
          onClick={goNext}
          disabled={pageIndex === TOTAL_PAGES - 1}
          className="p-2 rounded-full bg-white border shadow-md hover:bg-indigo-100 text-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
