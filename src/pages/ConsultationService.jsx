import react from 'react'
import Footer from '../components/Footer'
import ConsultationServiceHeader from '../components/ConsultationServiceHeader'
import one from "../assets/consultation/one.png"
import two from "../assets/consultation/two.png"
import three from "../assets/consultation/three.png"
import four from "../assets/consultation/four.png"
import five from "../assets/consultation/five.png"
import six from "../assets/consultation/six.png"
import seven from "../assets/consultation/seven.png"
import eight from "../assets/consultation/eight.png"
import nine from "../assets/consultation/nine.png"
import { BadgeCheckIcon, BadgeIndianRupeeIcon, ChartLine, File, GraduationCap, Lightbulb, Percent, Settings } from 'lucide-react'
import ten from "../assets/softwareservice/one.png"
import eleven from "../assets/softwareservice/two.png"
import twalve from "../assets/softwareservice/three.png"
import thirteen from "../assets/softwareservice/four.png"
import forteen from "../assets/softwareservice/five.png"
import fifteen from "../assets/softwareservice/six.png"
import sixteen from "../assets/softwareservice/seven.png"
import seventeen from "../assets/softwareservice/eight.png"


function ConsultationService() {

  const services = [
    {
      title: "HR Process Assessment & Gap Analysis",
      desc: "We analyze your existing HR processes and identify inefficiencies, redundancies, and improvement areas to ensure smoother operations.",
      img: one,
    },
    {
      title: "HRMS Strategy & Planning",
      desc: "We help you define a clear roadmap for HR digital transformation from requirement gathering to software selection and implementation planning.",
      img: two,
    },
    {
      title: "HR Software Selection Support",
      desc: "Our experts assist in evaluating and selecting the most suitable HRMS platform that aligns with your organization’s goals and budget.",
      img: three,
    },
    {
      title: "Implementation & Configuration Advisory",
      desc: "We guide your team through configuration best practices, data migration, and customization to ensure a seamless HRMS rollout.",
      img: four,
    },
    {
      title: "Workflow & Policy Mapping",
      desc: "We align your company’s HR policies, approval hierarchies, and workflows within the HRMS to achieve automation and compliance.",
      img: five,
    },
    {
      title: "Integration Assistance",
      desc: "We help connect HRMS with payroll, finance, attendance, and other systems to build a unified HR ecosystem.",
      img: six,
    },
    {
      title: "Compliance & Data Security Review",
      desc: "We ensure your HRMS setup meets statutory compliance, tax laws, and data protection standards.",
      img: seven,
    },
    {
      title: "Training & Change Management",
      desc: "We provide user training and change management support to help employees adapt easily to the new system.",
      img: eight,
    },
    {
      title: "Performance Review & Optimization",
      desc: "We continuously monitor HRMS performance and recommend enhancements to improve speed, accuracy, and user experience.",
      img: nine,
    },
  ];

  const points = [
    "13+ years of HR software implementation expertise",
    "Proven track record across industries",
    "Tailored HRMS strategy for small, mid, and large enterprises",
    "Dedicated post-implementation support",
    "End-to-end consulting from planning to optimization",
  ];
  const pointssec = [
    " 13+ years of experience in HRMS, Finance, and ERP integrations",
    "Deep expertise in asset tracking, depreciation, and reporting modules",
    "End-to-end consulting from process mapping to implementation",
    "Scalable solutions for SMEs and large enterprises",
    "Ongoing optimization and compliance support",
  ];
  const pointsthird = [
    " 13+ years of experience in TDS/TCS and payroll compliance",
    " Expertise in TRACES, NSDL, and Income Tax e-filing systems",
    "Cloud-based automation solutions for easy management",
    "End-to-end consulting — from setup to filing and correction",
    "Dedicated compliance support for hassle-free operations",
  ];

  const tcs = [
    {
      title: "TDS/TCS Process Review & Setup",
      desc: "We evaluate your existing process, identify compliance gaps, and implement efficient tax deduction and collection mechanisms aligned with the latest Income Tax regulations.",
      icon: Percent,
    },
    {
      title: "TDS/TCS Configuration & Implementation Support",
      desc: "From mapping deduction sections to configuring threshold limits and rates, we help set up accurate and automated systems within your ERP or HRMS platform.",
      icon: File,
    },
    {
      title: "Return Filing & Form Management",
      desc: "We assist with quarterly e-filing of TDS/TCS returns, Form 24Q/26Q/27EQ preparation, and generation of Form 16/16A/27D with 100% accuracy and validation.",
      icon: BadgeCheckIcon,
    },
    {
      title: "Challan & Payment Advisory",
      desc: "Get end-to-end guidance for challan preparation (ITNS 281), payment schedules, and reconciliation with TRACES portal to ensure timely compliance.",
      icon: GraduationCap,
    },
    {
      title: "Compliance Review & Correction Handling",
      desc: "We help identify mismatches, manage corrections, and handle notice responses ensuring your data stays clean and compliant.",
      icon: Settings,
    },
    {
      title: "Automation & Integration Consulting",
      desc: "Leverage technology to automate TDS/TCS workflows, integrate with accounting or payroll systems, and reduce manual errors.",
      icon: BadgeIndianRupeeIcon,
    },
    {
      title: "Training & Knowledge Sharing",
      desc: "We provide practical training for your finance and HR teams on TDS/TCS rules, rate updates, and e-filing best practices.",
      icon: ChartLine,
    },
  ];

  const softwareservices = [
    {
      title: "Asset Lifecycle Planning & Digitization",
      desc: "We assist you in structuring your asset database from acquisition, tagging, and depreciation setup to disposal for a clear, compliant, and traceable asset lifecycle.",
      img: ten,
    },
    {
      title: "System Design & Implementation Guidance",
      desc: "Get expert help in selecting and configuring the right asset management platform that matches your organization's size, industry, and operational needs.",
      img: eleven,
    },
    {
      title: "Integration With ERP, Finance & HR Systems",
      desc: "We connect your asset module seamlessly with ERP, finance, HRMS systems, and billing services to ensure automatic updates, accurate depreciation, and audit-ready reporting.",
      img: twalve,
    },
    {
      title: "Asset Tracking & Tagging Consultation",
      desc: "We guide you in implementing barcoding, RFID, or QR-based tracking systems for real-time visibility of movable and fixed assets across multiple locations.",
      img: thirteen,
    },
    {
      title: "Depreciation & Valuation Management",
      desc: "Our experts help you configure automated depreciation methods, valuation rules, and compliance settings as per accounting standards and audit norms.",
      img: forteen,
    },
    {
      title: "Compliance & Audit Readiness",
      desc: "We ensure your asset management system adheres to accounting standards (AS/IND-AS/IFRS) and statutory reporting requirements, minimizing audit risks.",
      img: fifteen,
    },
    {
      title: "User Training & Adoption Support",
      desc: "We provide hands-on user training, SOP creation, and workflow documentation to help your team adapt and maintain asset records efficiently.",
      img: sixteen,
    },
    {
      title: "Performance Review & Optimization",
      desc: "We continuously monitor your asset system’s usage, recommend process improvements, and implement automation to improve efficiency and control.",
      img: seventeen,
    },
  ];

  return (

    <>
      <ConsultationServiceHeader />
      {/* card */}
      <section className="w-full py-12 px-5 md:px-10 bg-white">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B]">
            HRMS Consultation Services
          </h2>
          <p className="mt-3 text-lg font-semibold text-gray-800">
            Optimize Your HR Operations with Expert Guidance
          </p>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Our HRMS Consultation Services help organizations streamline HR processes,
            improve compliance, and maximize ROI from their HR technology investments.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-300 hover:shadow-lg transition">
              <img src={item.img} alt={item.title} className="w-full h-36 object-cover rounded-md mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">{item.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* why choose us */}

      <section className="w-full py-12 px-5 md:px-10 bg-white">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <h2 className=" flex items-center justify-center text-2xl md:text-3xl font-bold text-gray-900">
            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Why Choose Us?</span>
          </h2>
        </div>

        {/* Bullet Points */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center md:text-left">
          {points.map((item, index) => (
            <div key={index} className="flex justify-center md:justify-start">
              <ul className="list-disc list-inside text-gray-800 text-sm md:text-base space-y-1">
                <li>{item}</li>
              </ul>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="max-w-4xl mx-auto mt-10">
          <p className="text-center italic font-medium text-gray-800 text-sm md:text-base leading-relaxed">
            “Before purchasing an HRMS application, avoid making a rushed decision.
            Share your requirements with us, and we will recommend the most suitable and reliable
            solution in the market. Many companies sell HRMS products but struggle to provide ongoing
            support—our goal is to ensure you get both the right software and dependable assistance.”
          </p>
        </div>
      </section>

      {/* TDS service */}

      <section className="w-full py-12 px-5 md:px-10 bg-white">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B]">
            TDS/TCS Consultation Services
          </h2>
          <p className="mt-3 text-lg font-semibold text-gray-800">
            Simplify Tax Compliance. Strengthen Financial Accuracy.
          </p>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Managing TDS (Tax Deducted at Source) and TCS (Tax Collected at Source) can be complex
            and time-consuming. Our expert consultation services help businesses stay compliant,
            avoid penalties, and streamline every aspect of tax deduction, filing, and reporting
            with accuracy and confidence.
          </p>
        </div>

        {/* List Items */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {tcs.map((item, index) => {
            const IconComponent = item.icon; // extract icon component

            return (
              <div key={index} className="flex gap-4 items-start">
                {/* Icon */}
                <div className="w-10 h-10 min-w-[40px] flex items-center justify-center rounded-full bg-[#e8efff]">
                  <IconComponent className="w-5 h-5 text-[#1A2B6B]" />
                </div>

                {/* Text Content */}
                <div>
                  <h3 className="font-semibold text-[#1A2B6B] mb-1 text-sm md:text-base">
                    {index + 1}. {item.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* why choose sec */}

      <section className="w-full py-12 px-5 md:px-10 bg-white">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <h2 className=" flex items-center justify-center text-2xl md:text-3xl font-bold text-gray-900">
            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Why Choose Us?</span>
          </h2>
        </div>

        {/* Bullet Points */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center md:text-left">
          {pointssec.map((item, index) => (
            <div key={index} className="flex justify-center md:justify-start">
              <ul className="list-disc list-inside text-gray-800 text-sm md:text-base space-y-1">
                <li>{item}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* software service */}
      <section className="w-full py-12 px-5 md:px-10 bg-white">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B]">
            Asset Management Software Consultation Services
          </h2>
          <p className="mt-3 text-lg font-semibold text-gray-800">
            Gain Complete Control and Visibility Over Your Business Assets
          </p>
          <p className="text-gray-600 mt-2 text-sm md:text-base">
            Our Asset Management Software Consultation Services help organizations digitize, track, and optimize their assets throughout their lifecycle from procurement to disposal. We ensure your system is designed for accuracy, compliance, and maximum return on investment.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {softwareservices.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-400 hover:shadow-lg transition">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-36 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

            {/* why choose third */}

      <section className="w-full py-12 px-5 md:px-10 bg-white">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">

          <h2 className=" flex items-center justify-center text-2xl md:text-3xl font-bold text-gray-900">
            <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center mr-3">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">Why Choose Us?</span>
          </h2>
        </div>

        {/* Bullet Points */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center md:text-left">
          {pointsthird.map((item, index) => (
            <div key={index} className="flex justify-center md:justify-start">
              <ul className="list-disc list-inside text-gray-800 text-sm md:text-base space-y-1">
                <li>{item}</li>
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* asset control */}
<div className="bg-[#FFF7ED] mt-12 p-8 md:p-12 rounded-lg text-center">
        <h3 className="text-xl md:text-3xl font-semibold text-[#1A2B6B] mb-6">
           Empower Your Business with Smarter Asset Control
        </h3>

        <div className="gap-6 text-gray-700 text-sm md:text-xl max-w-5xl mx-auto">
          <p>Reduce manual tracking, eliminate asset loss, and improve financial accuracy with our expert asset management software consulting.</p>
        </div>
      </div>

      {/* Footer CTA Text */}
      <p className="text-center p-10 mt-10 text-black text-xl md:text-4xl">
        <span className="text-[#1A2B6B] font-semibold italic text-base md:text-4xl">
         Connect with us today
        </span>{" "}
          to discover how we can help you build a <br/> smarter, more efficient asset ecosystem.
      </p>
      <Footer />
    </>

  )
}

export default ConsultationService
