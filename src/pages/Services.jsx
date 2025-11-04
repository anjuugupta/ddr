import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Download, FileText, CheckCircle } from "lucide-react";
import Footer from "../components/Footer";
import servicebanner from "../assets/service.png"
import ServiceCards from "../components/ServiceCards";
import RegistrationServices from "../components/RegistrationServices";

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
      setPageIndex((prev) => prev + 1);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goPrev = () => {
    if (pageIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setPageIndex((prev) => prev - 1);
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
      {/* ✅ Hero Banner Section */}
      <div className="relative w-full h-[40vh] md:h-[95vh] overflow-hidden">
        <img
          src={servicebanner}
          alt="Our Services Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
       
      </div>

      <ServiceCards/>
<RegistrationServices/>
    

      <Footer />
    </div>
  );
}
