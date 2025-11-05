import React, { useState, useEffect, useRef } from "react";
import software from "../assets/software.png";
import hrm from "../assets/hrms.png"
import crm from "../assets/crm-solutions.png";
import erp from "../assets/erp-image.png";
import school from "../assets/fee-management-system.png";
import canteen from "../assets/canteen.png";
import visitor from "../assets/images.png";
import customized from "../assets/cutomer.png";
import ondemand from "../assets/ondemand.png";
import Footer from "../components/Footer";
import tds from "../assets/tds.png"
import ServiceHeroPremium from "../components/ServiceHeroPremium";
import assetssoftware from "../assets/assetssoftware.webp"

const SoftwareSolution = () => {
  const [progress, setProgress] = useState(0);
  const sectionRefs = useRef([]);

  const sections = [
    {
      title: "HRM / PAYROLL SOFTWARE",
      description:
"A cloud-based HRMS is hosted on external service provider servers, accessible online to anyone within the organization from any location. Unlike disparate systems, cloud HRMS provides easy access to all information with just one click and in one centralized location.",
      color: "#062d81ff",
      img: hrm,
    },
    {
      title: "CRM SOFTWARE",
      description:
        "we provide cutting-edge CRM solutions to revolutionize your business's customer relationships and accelerate your growth. Our powerful CRM software is tailored to streamline your sales, marketing, and customer service processes, enabling you to forge lasting connections with your valued clientele.",
      color: "#062d81ff",
      img: crm,
    },
    {
      title: "ERP SOFTWARE",
      description:
        "DDR Managements ERP centralizes data and streamlines workflows, offering real-time insights to boost efficiency and support smarter decisions across finance, inventory, and supply chain operations.",
      color: "#062d81ff",
      img: erp,
    },
    {
      title: "SCHOOL & FEE MANAGEMENT SOFTWARE",
      description:
        "School & Fee Management Software centralizes data and automates workflows, offering real-time insights to simplify fee collection, student management, and administrative tasks for greater efficiency. It ensures transparency, accuracy, and smooth communication between schools, parents, and administrators.",
      color: "#062d81ff",
      img: school,
    },
    {
      title: "CANTEEN MANAGEMENT SOFTWARE",
      description:
        "The Canteen Management System (CMS) is a comprehensive software solution designed to streamline and enhance the operations of canteens or cafeterias within organizations. It integrates various modules to facilitate efficient management of canteen services, including visitor management food ordering and Guest Management. ",
      color: "#062d81ff",
      img: canteen,
    },
    {
      title: "VISITOR MANAGEMENT SOFTWARE",
      description:
        "Our Visitor Management System simplifies and secures the check-in process with features like photo capture, OTP verification, notifications, and detailed visitor tracking — ensuring a seamless experience for hosts and guests.",
      color: "#062d81ff",
      img: visitor,
    },
    {
      title: "CUSTOMIZED SOFTWARE SOLUTION",
      description:
        "Our Customized Software Solutions are tailored to meet your unique business needs, helping you streamline operations, improve efficiency, and achieve your goals with precision and flexibility.",
      color: "#062d81ff",
      img: customized,
    },
    {
      title: "ON-DEMAND SOFTWARE SOLUTION",
      description:
"Our On-Demand Software Solutions deliver tailored, scalable, and efficient applications designed to meet your business requirements instantly and drive seamless performance.",      color: "#062d81ff",
      img: ondemand,
    },
    {
      title: "SMART WEB-BASED TDS SOFTWARE",
      description:
"Simplify your TDS management with our cloud-based platform. Automate tax calculations, challans, and e-filing with 100% accuracy and compliance. Generate Form 16/16A, track deductions, and stay updated with the latest tax rules — all from one secure, easy-to-use dashboard.",      color: "#062d81ff",
      img: tds,
    },
    {
      title: "ASSET MANAGEMENT SOFTWARE SOLUTION",
      description:
"Efficiently manage and track all your business assets with our powerful Asset Management Software. From acquisition to disposal, gain complete visibility and control through automated tracking, smart depreciation, and real-time insights. Simplify compliance, reduce costs, and make smarter decisions all from one centralized platform.",
 color: "#062d81ff",      
img: assetssoftware,
    },
  ];

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollY = window.scrollY;
      const scrolled = (scrollY / totalHeight) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">

<ServiceHeroPremium />
    <div className="min-h-screen pt-30 pb-10 bg-white py-12 px-4 sm:px-6  relative overflow-hidden">
      {/* Header */}
{/* discription line */}


<div>
 <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-6 pb-40">
  <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center pb-6 text-blue-900 pb-20">
    Integrated Business Automation Software
  </p>

  <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
    
    <div className="text-gray-700 text-sm sm:text-base leading-relaxed md:w-1/2 w-full">
      We provide smart, scalable, and tailored software solutions for complete business automation and enhanced efficiency.
      <br />
      Our specialized systems span HRMS, Payroll, Accounting (TDS), Compliance, ERP, CRM, and Asset Management.
      <br />
      We ensure accurate employee management and statutory compliance (PF, ESIC, PT, TDS), simplify complex financial processes, and connect all business functions for real-time insights.
    </div>

    <div className="text-gray-700 text-sm sm:text-base leading-relaxed md:w-1/2 w-full">
      The result is improved productivity, accuracy, and transparency, allowing businesses to reduce manual effort and focus on strategic growth.
    </div>
  </div>
</div>

</div>
      {/* Timeline */}
      <div className="max-w-7xl mx-auto relative ">
        {/* Background line */}
        <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1 bg-gray-200 rounded-full"></div>

        {/* Gradient scroll line */}
        <div
          className="hidden lg:block absolute left-8 top-0 w-1 bg-blue-500 rounded-full transition-all duration-500"
          style={{
            height: `${Math.min(progress, 100)}%`,
          }}
        ></div>

        {/* Sections */}
        <div className="space-y-24 lg:space-y-32 relative z-10 ">
          {sections.map((section, index) => (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* Left content */}
                <div className="relative lg:pl-24">
                  {/* Dot */}
                  <div
                    className={`hidden lg:block absolute left-4  w-8 h-8 rounded-full border-4 border-white transition-all duration-700 ease-in-out ${
                      progress >= ((index + 1) / sections.length) * 100 - 10
                        ? "scale-125 shadow-[0_0_25px] shadow-current"
                        : "scale-90 border-gray-300 bg-white"
                    }`}
                    style={{
                      backgroundColor:
                        progress >= ((index + 1) / sections.length) * 100 - 10
                          ? section.color
                          : "white",
                      color: section.color,
                    }}
                  ></div>

                  {/* Text */}
                  <div
                    className={`transition-all duration-700 ${
                      progress >= (index / sections.length) * 100
                        ? "opacity-100 translate-x-0"
                        : "opacity-40 lg:translate-x-6"
                    }`}
                  >
                    <h3
                      className="text-2xl md:text-3xl font-bold mb-4"
                      style={{ color: section.color }}
                    >
                      {section.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Right image */}
                <div
                  className={`transition-all duration-700 ease-in-out ${
                    progress >= (index / sections.length) * 100
                      ? "opacity-100 translate-y-0"
                      : "opacity-40 translate-y-10"
                  }`}
                >
                  <div className="rounded-xl overflow-hidden shadow-xl hover:scale-[1.03] transition-transform duration-500">
                    <img
                      src={section.img}
                      alt={section.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default SoftwareSolution;
