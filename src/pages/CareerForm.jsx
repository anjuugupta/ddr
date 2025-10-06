import React, { useState } from "react";
import { Link2, Upload, X, CheckCircle, Briefcase, MapPin, DollarSign, Calendar } from "lucide-react";
import Footer from "../components/Footer";

// Sample data structure for dynamic steps/pages
const pages = [
  {
    fields: [
      { label: "Full Name", required: true, type: "text", name: "fullName", icon: "user" },
      { label: "Contact", required: true, type: "text", name: "contact", icon: "phone" },
      { label: "Email", required: true, type: "email", name: "email", icon: "mail" },
      { label: "Highest Qualification", required: false, type: "text", name: "qualification", icon: "graduation" },
      { label: "Job Title", required: false, type: "text", name: "jobTitle", icon: "briefcase" },
    ],
    rightFields: [
      { label: "Preferred Location", required: false, type: "text", name: "location", icon: "map" },
      { label: "Work Experiences", required: false, type: "text", name: "experience", icon: "clock" },
      { label: "Previous Employee", required: false, type: "text", name: "previousEmployee", icon: "building" },
      { label: "Expected Salary", required: false, type: "text", name: "salary", icon: "dollar" },
      { label: "Availability to start work", required: false, type: "text", name: "availability", icon: "calendar" },
    ],
    showAttachment: true,
  },
];

export default function CareerForm() {
  const [page, setPage] = useState(0);
  const [files, setFiles] = useState([]);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({});
  const totalPages = pages.length;

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const current = pages[page];

  return (
    <div>

    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 border-4 border-indigo-400/20 rotate-45 rounded-lg" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }}></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }
      `}</style>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-block">
            <div className="flex items-center justify-center gap-2 bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-sm">
              <Briefcase size={18} />
              <span>Join Our Team</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#202261D6] via-orange-300 to-[#FF9433C4] bg-clip-text text-transparent mb-4">
            Career Opportunities
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Submit your CV and let us find the perfect role that matches your skills and aspirations
          </p>
        </div>

        {/* Main Form Container */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Progress Indicator */}
            <div className="bg-gradient-to-r from-[#202261D6] via-orange-300 to-[#FF9433C4] h-2">
              <div 
                className="h-full bg-white/30 transition-all duration-500"
                style={{ width: `${((page + 1) / totalPages) * 100}%` }}
              ></div>
            </div>

            <form className="p-8 md:p-12">
              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {/* Left Column */}
                <div className="space-y-6">
                  {current.fields.map((field, i) => (
                    <div 
                      key={i}
                      className="group"
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        {field.label}
                        {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <div className="relative">
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none transition-all duration-300 ${
                            focusedField === field.name
                              ? 'border-orange-500 bg-white shadow-lg scale-[1.02]'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          required={field.required}
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                        />
                        {formData[field.name] && (
                          <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500" size={20} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {current.rightFields.map((field, i) => (
                    <div 
                      key={i}
                      className="group"
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                        {field.icon === 'map' && <MapPin size={16} className="text-indigo-500" />}
                        {field.icon === 'dollar' && <DollarSign size={16} className="text-indigo-500" />}
                        {field.icon === 'calendar' && <Calendar size={16} className="text-indigo-500" />}
                        {field.label}
                        {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <div className="relative">
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name] || ''}
                          onChange={(e) => handleInputChange(field.name, e.target.value)}
                          onFocus={() => setFocusedField(field.name)}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 bg-gray-50 border-2 rounded-xl outline-none transition-all duration-300 ${
                            focusedField === field.name
                              ? 'border-indigo-500 bg-white shadow-lg scale-[1.02]'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                          required={field.required}
                          placeholder={`Enter ${field.label.toLowerCase()}`}
                        />
                        {formData[field.name] && (
                          <CheckCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500" size={20} />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* File Upload Section */}
              {current.showAttachment && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                    <Upload size={20} className="text-indigo-600" />
                    Attach Your Documents
                  </h3>
                  
                  <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-indigo-400 transition-all duration-300 bg-gray-50 hover:bg-white group cursor-pointer">
                    <input
                      type="file"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="flex flex-col items-center gap-3">
                        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Upload size={28} className="text-indigo-600" />
                        </div>
                        <div>
                          <p className="text-gray-700 font-medium">Drop files here or click to upload</p>
                          <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX (Max 10MB)</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  {/* File List */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <div 
                          key={index}
                          className="flex items-center justify-between bg-indigo-50 rounded-xl p-4 group hover:bg-indigo-100 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-indigo-200 rounded-lg flex items-center justify-center">
                              <Link2 size={20} className="text-indigo-600" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-800">{file.name}</p>
                              <p className="text-xs text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:bg-red-200 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="group relative w-full bg-gradient-to-r from-[#202261D6] via-orange-300 to-[#FF9433C4] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Submit Application
                  <CheckCircle size={20} className="group-hover:rotate-12 transition-transform" />
                </span>
              </button>

              {/* reCAPTCHA Notice */}
              <p className="text-xs text-gray-500 text-center mt-6">
                This site is protected by reCAPTCHA and the Google{' '}
                <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a> and{' '}
                <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a> apply.
              </p>
            </form>
          </div>

          {/* Benefits Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Briefcase />, title: "Career Growth", desc: "Continuous learning opportunities" },
              { icon: <MapPin />, title: "Flexible Location", desc: "Remote & hybrid options" },
              { icon: <DollarSign />, title: "Competitive Pay", desc: "Industry-leading salaries" }
            ].map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#202261D6] via-orange-300 to-[#FF9433C4] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}