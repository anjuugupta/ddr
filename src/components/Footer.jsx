import React from "react";
import logo from "../assets/logo.png";
import { FacebookIcon, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#202261D6] text-white px-6 sm:px-8 py-12 mt-16 rounded-t-3xl">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      {/* Logo and Social */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <img
          src={logo}
          alt="DDR Management Logo"
          className="h-16 w-16 mb-4"
        />
        <div className="flex space-x-4 mt-2 justify-center md:justify-start">
          <a href="#"><FacebookIcon className="w-6 h-6 text-white" /></a>
          <a href="#"><Instagram className="w-6 h-6 text-white" /></a>
          <a href="#"><Linkedin className="w-6 h-6 text-white" /></a>
        </div>
      </div>

      {/* Contact */}
      <div className="text-center md:text-left">
        <h3 className="text-[#ff9f43] font-bold text-lg mb-2">Our Contact</h3>
        <p>9987320764</p>
        <p>contact@ddrmanagement.com</p>
      </div>

      {/* Address */}
      <div className="text-center md:text-left">
        <h3 className="text-[#ff9f43] font-bold text-lg mb-2">Our Address</h3>
        <p>
          Mumbai: A-808, Deep Classic Tower, Yashwant Smart City, Vasai East<br />
          Mumbai, Maharashtra-401208
        </p>
        <p className="mt-2">
          Gurgaon: 1st Floor Alt F, Orchid Business Park, Sohna Road, Sector 48,<br />
          Gurgaon <a href="#" className="underline">122004</a> Haryana
        </p>
      </div>

      {/* Quick Links */}
      <div className="text-center md:text-left">
        <h3 className="text-[#ff9f43] font-bold text-lg mb-2">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="font-semibold hover:underline">Home</a></li>
          <li><a href="#" className="font-semibold hover:underline">Our Services</a></li>
          <li><a href="#" className="font-semibold hover:underline">Apply For Jobs</a></li>
          <li><a href="#" className="font-semibold hover:underline">Software Solution</a></li>
        </ul>
      </div>
    </div>

    {/* Copyright */}
    <div className="border-t border-white mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-center sm:text-left gap-2 sm:gap-0">
      <span>
        © 2024 DDR MANAGEMENT OUTSOURCING SERVICES - All Rights Reserved.
      </span>
      <span>
        Powered by DDR Management
      </span>
    </div>
  </footer>
);

export default Footer;
