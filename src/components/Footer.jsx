import React from "react";
import logo from "../assets/logo.png";
import { FacebookIcon, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#000242d6] text-white px-6 sm:px-8 py-12  ">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
      {/* Logo and Social */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <img
          src={logo}
          alt="DDR Management Logo"
          className="h-26 w-26 mb-4"
        />
        <div className="flex space-x-4 mt-2 justify-center md:justify-start">
          <a href="https://www.facebook.com/share/1GYt18xYoB/"><FacebookIcon className="w-6 h-6 text-white" /></a>
          <a href="https://www.instagram.com/ddrpayrolloutsourcing"><Instagram className="w-6 h-6 text-white" /></a>
          <a href="https://www.linkedin.com/in/ddr-management-outsourcing-services-b58a08359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><Linkedin className="w-6 h-6 text-white" /></a>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center md:text-left">
        <h3 className="text-[#ff9f43] font-bold text-lg mb-2">Our Contact</h3>

        {/* Phone Numbers */}
        <div className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap">
          <Phone className="w-4 h-4 shrink-0" />
          <span>+91 99873 20764, +91 93702 38341, <br /> +91 98913 95711, +91 98893 78658</span>
        </div>

        {/* Email */}
        <a
          href="mailto:contact@ddrmanagement.com"
          className="flex items-center gap-2 mt-2 text-sm font-semibold hover:underline whitespace-nowrap"
        >
          <Mail className="w-4 h-4 shrink-0" />
          contact@ddrmanagement.com
        </a>
      </div>




      {/* Address */}
      <div className="text-center md:text-left">
        <h3 className="text-[#ff9f43] font-bold text-lg mb-2">Our Address</h3>
        <p>
          Mumbai: A-808,Deep Classic Tower, Yashwant Smart City,Vasai East Mumbai,Maharashta-401208
        </p>
        <p className="mt-2">
          Gurgaon: 1st Floor Alt F, Orchid Business Park, Sohna Road, Sector 48, Gurgaon Haryana 122004
        </p>
      </div>

      {/* Quick Links */}
      <div className="text-center md:text-left">
        <h3 className="text-[#ff9f43] font-bold text-lg mb-2">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="/" className="font-semibold hover:underline">Home</a></li>
          <li><a href="/services" className="font-semibold hover:underline">Our Services</a></li>
          <li><a href="/software" className="font-semibold hover:underline">Software Solutions</a></li>
          <li><a href="/website" className="font-semibold hover:underline">Website Solutions</a></li>
          <li><a href="/consultation" className="font-semibold hover:underline">Consultation Services</a></li>
        </ul>
      </div>
      <div>
        <h3 className="text-[#ff9f43] font-bold text-lg mb-2">Career</h3>

        <a
          href="mailto:contact@ddrmanagement.com?subject=Job Application"
          className="text-sm font-semibold text-white hover:underline flex items-center gap-2"
        >
          Apply for Job
        </a>
      </div>

    </div>

    {/* Copyright */}
    <div className="border-t border-white mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-center sm:text-left gap-2 sm:gap-0">
      <span>
        Copyright © 2024 DDR MANAGEMENT OUTSOURCING SERVICES - All Rights Reserved.      </span>
      <span>
        Powered by DDR Management
      </span>
    </div>
  </footer>
);

export default Footer;
