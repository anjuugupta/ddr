import React from "react";
import logo from "../assets/logo.png";
import { FacebookIcon, Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-[#000242d6] text-white px-6 sm:px-8 py-12  ">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
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
         <div>
              <p className="text-sm"><span className="font-semibold"> <br/> +91 99873 20764, +91 93702 38341 <br/> +91 98913 95711, +91 98893 78658</span></p>
            </div>
         <div>
              <p className="text-sm"> <span className="font-semibold">contact@ddrmanagement.com</span></p>
            </div>
         
      </div>

      {/* Address */}
      <div className="text-center md:text-left">
        <h3 className="text-[#ff9f43] font-bold text-lg mb-2">Our Address</h3>
        <p>
          Mumbai: A-808,Deep Classic Tower, Yashwant Smart City,Vasai East Mumbai,Maharashta-401208
        </p>
        <p className="mt-2">
         Gurgaon: Gurgaon: 1st Floor Alt F, Orchid Business Park, Sohna Road, Sector 48, Gurgaon Haryana 122004
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
Copyright © 2024 DDR MANAGEMENT OUTSOURCING SERVICES - All Rights Reserved.      </span>
      <span>
        Powered by DDR Management
      </span>
    </div>
  </footer>
);

export default Footer;
