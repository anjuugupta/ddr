import React from 'react';
import education from "../assets/education.jpg";
import factories from "../assets/factories.jpg";
import healthcare from "../assets/healthcare.jpg";
import hospital from "../assets/hospital.png";

export default function IndustrySection() {

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

    return (
        <section className="relative py-36 px-14 md:px-10 overflow-hidden">

            {/* 🔵 Blue spot (Left) */}
            <div className="absolute -top-20 -left-10 w-100 h-100 bg-blue-300/40 blur-[90px] rounded-full"></div>

            {/* 🟠 Orange spot (Right) */}
            <div className="absolute bottom-0 right-0 w-100 h-100 bg-orange-300/50 blur-[110px] rounded-full"></div>

            {/* Title */}
            <h2 className="relative text-center text-2xl md:text-4xl font-bold text-[#2B2B6F] mb-14 z-10">
                Comprehensive Payroll & Attendance Solutions for Every Industry
            </h2>

            {/* Cards */}
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 z-10">
                {industries.map((item, index) => (
                    <div
                        key={index}
                        className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer bg-white/40 backdrop-blur-sm"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-60 object-cover rounded-xl group-hover:scale-110 transition-all duration-700"
                        />

                        {/* Hover Overlay Text */}
                        <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-full bg-black/65 backdrop-blur-md text-white p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-500">
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
