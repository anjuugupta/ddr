import React, { useState, useRef } from "react";
import { Upload, X, ChevronRight } from "lucide-react";
import contactimg from "../assets/contactimg.png"
export default function ContactUsSection() {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileInput = (e) => {
    const selected = Array.from(e.target.files || []);
    if (selected.length === 0) return;
    setFiles((prev) => [...prev, ...selected]);
    e.target.value = null;
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const dropped = Array.from(e.dataTransfer?.files || []);
    if (dropped.length > 0) setFiles((prev) => [...prev, ...dropped]);
  };

  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-[#383B97]">Contact Us</h2>
        <p className="text-gray-600 mt-1">
          At DDR Management Outsourcing Services
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Left Form */}
        <div className="flex-1">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-700">Name*</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-blue-700 outline-none py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Company Name</label>
                <input
                  type="text"
                  className="w-full border-b border-gray-300 focus:border-blue-700 outline-none py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Email*</label>
                <input
                  type="email"
                  className="w-full border-b border-gray-300 focus:border-blue-700 outline-none py-2"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Contact*</label>
                <input
                  type="tel"
                  className="w-full border-b border-gray-300 focus:border-blue-700 outline-none py-2"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700">Message*</label>
              <textarea
                rows={3}
                className="w-full border-b border-gray-300 focus:border-blue-700 outline-none py-2"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Location*</label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:border-blue-700 outline-none py-2"
              />
            </div>

            <div>
              <label className="text-sm text-gray-700">Services (pick number)</label>
              <input
                type="text"
                className="w-full border-b border-gray-300 focus:border-blue-700 outline-none py-2"
              />
              <p className="text-xs text-gray-400 mt-1">
                Services: 1-Payroll Outsourcing, 2-Asset Outsourcing, 3-TDS Outsourcing, 4-Payroll Compliance
              </p>
            </div>

            
            <div className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              <p className="text-gray-600">
                Sign up for our email list for updates, promotions, and more.
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#383B97] text-white py-3 rounded-lg mt-2 hover:bg-[#2d2f7a] transition"
            >
              Submit Application
            </button>
          </form>
        </div>

        {/* Right Card */}
        <div className="lg:w-[420px] bg-white rounded-xl  p-6 h-full relative overflow-hidden">
          <img
          src={contactimg}
          />
        </div>
      </div>
    </section>
  );
}
