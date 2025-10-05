import { Link2, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    contact: "",
    message: "",
    location: "",
    services: "",
    files: [],
    subscribe: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, files: Array.from(files) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.contact) newErrors.contact = true;
    if (!formData.message) newErrors.message = true;
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1800);
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="relative bg-white overflow-x-hidden py-8">
      {/* Orange Background Shape - Top Right */}
      <div
        className="absolute top-60 -right-50 w-150 h-150 bg-[#FF9433E8] rounded-2xl pointer-events-none -mr-20 -mt-10 hidden lg:block"
      ></div>

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#383B97] mb-3">
          Contact Us Page
        </h2>
        <p className="text-base sm:text-lg text-center text-gray-700">
          At DDR Management Outsourcing Services
        </p>
      </div>

      {/* Form + Contact Info Container */}
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-0  rounded-lg overflow-hidden">

          {/* Left: Form */}
          <div className="flex-1 px-6 sm:px-10 lg:px-16 py-10">
            <form className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>

              {/* Name & Company */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block mb-2 text-gray-700 text-sm">Name*</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full border-b-2 ${errors.name ? "border-red-500" : "border-orange-400"
                      } bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 text-gray-800`}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-gray-700 text-sm">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border-b-2 border-orange-400 bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 text-gray-800"
                  />
                </div>
              </div>

              {/* Email & Contact */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block mb-2 text-gray-700 text-sm">Email*</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full border-b-2 ${errors.email ? "border-red-500" : "border-orange-400"
                      } bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 text-gray-800`}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label className="block mb-2 text-gray-700 text-sm">Contact Number*</label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className={`w-full border-b-2 ${errors.contact ? "border-red-500" : "border-orange-400"
                      } bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 text-gray-800`}
                    required
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 text-gray-700 text-sm">Message*</label>
                <textarea
                  name="message"
                  rows={1}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full border-b-2 ${errors.message ? "border-red-500" : "border-orange-400"
                    } bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 text-gray-800 resize-none`}
                  required
                />
              </div>

              {/* Location */}
              <div className="relative">
                <label className="block mb-2 text-gray-700 text-sm">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border-b-2 border-orange-400 bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 text-gray-800"
                />
                {/* Dotted line with location icon */}
                
              </div>

              {/* Services */}
              <div>
                <label className="block mb-2 text-gray-700 text-sm">Services (pick number)</label>
                <input
                  type="text"
                  name="services"
                  value={formData.services}
                  onChange={handleChange}
                  className="w-full border-b-2 border-orange-400 bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 text-gray-800"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Services: 1-Payroll Outsourcing, 2-Asset Outsourcing, 3-TDS Outsourcing, 4-Payroll Compliance
                </p>
              </div>

              {/* File Attach */}
              <div className="flex items-center justify-between pt-2 border-b-2 border-orange-400 pb-2">
                <label className="cursor-pointer flex items-center gap-2 text-gray-700 text-sm">
                  <Link2 className="text-indigo-500 w-4 h-4" />
                  Attach Files
                  <input
                    type="file"
                    name="files"
                    onChange={handleChange}
                    multiple
                    className="hidden"
                  />
                </label>
                <span className="text-xs text-gray-500">
                  Attachments ({formData.files.length})
                </span>
              </div>

              {/* Subscribe */}
              <div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="accent-indigo-600 w-4 h-4 mt-1"
                  />
                  <span className="text-gray-700 text-sm">
                    Sign up for our email list for updates, promotions, and more.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#6366F1] text-white font-medium rounded-md py-3 mt-4 transition-colors duration-300 hover:bg-indigo-600 focus:outline-none"
              >
                {submitted ? "Request Submitted!" : "Submit Your Request"}
              </button>
            </form>
          </div>

          {/* Right: Contact Info Card */}
          <div className="relative top-30 lg:w-[420px] bg-gradient-to-br from-[#6366F1] to-[#7C7FE8] text-white p-6 lg:p-8 rounded-tl-[60px] lg:rounded-tl-40 lg:rounded-tr-[60px] rounded-br-[60px] flex flex-col justify-start shadow-2xl space-y-3 max-h-[500px] overflow-y-auto">

            {/* Address */}
            <div>
              <h3 className="text-lg font-bold mb-1">Address</h3>
              <p className="text-sm leading-relaxed">
                <strong>Mumbai:</strong> A-808, Deep Classic Tower, Vasai East Mumbai, Maharashtra-401208
              </p>
              <p className="text-sm leading-relaxed mt-1">
                <strong>Gurgaon:</strong> 1st Floor Alt F, Orchid Business Park, Sohna Road, Sector 48, Gurgaon 122004
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-1">Contact</h3>
              <p className="text-sm mb-1">9987320764</p>
              <a
                href="mailto:contact@ddrmanagement.com"
                className="text-sm hover:text-orange-200 transition-colors"
              >
                contact@ddrmanagement.com
              </a>
            </div>

            {/* Working Hours */}
            <div>
              <h3 className="text-lg font-bold mb-1">Working Hours</h3>
              <p className="text-sm">Open Today: <span className="font-semibold">10:00 am – 07:00 pm</span></p>
            </div>

            {/* Also Available At */}
            <div>
              <h3 className="text-lg font-bold mb-1">Also Available At</h3>
              <p className="text-sm">Delhi-NCR, Lucknow, Varanasi, Purvanchal</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}