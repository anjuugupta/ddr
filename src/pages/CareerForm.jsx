import React, { useState } from 'react';
import { Upload, X } from 'lucide-react';
import Footer from '../components/Footer';

export default function CareerForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    email: '',
    highestQualification: '',
    jobTitle: '',
    preferredLocation: '',
    workExperiences: '',
    previousEmployer: '',
    expectedSalary: '',
    availability: ''
  });
  
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (fileList) => {
    const newFiles = Array.from(fileList).filter(file => {
      const fileType = file.name.split('.').pop().toLowerCase();
      return ['pdf', 'doc', 'docx', 'xlsx', 'pptx'].includes(fileType);
    });
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    console.log('Files:', files);
    alert('Application submitted successfully!');
  };

  return (
    <div>

    <div className="min-h-screen pt-40 bg-gradient-to-br from-blue-50 to-orange-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Just submit your CV and we will find a better job for you.
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Full Name*</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-900 outline-none py-2 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Contact*</label>
                    <input
                      type="tel"
                      name="contact"
                      value={formData.contact}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-900 outline-none py-2 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-900 outline-none py-2 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Highest Qualification*</label>
                    <input
                      type="text"
                      name="highestQualification"
                      value={formData.highestQualification}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-900 outline-none py-2 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Job Title*</label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-900 outline-none py-2 transition-colors"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Preferred Location</label>
                    <input
                      type="text"
                      name="preferredLocation"
                      value={formData.preferredLocation}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-900 outline-none py-2 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Work Experiences</label>
                    <input
                      type="text"
                      name="workExperiences"
                      value={formData.workExperiences}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-900 outline-none py-2 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Previous Employer</label>
                    <input
                      type="text"
                      name="previousEmployer"
                      value={formData.previousEmployer}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-900 outline-none py-2 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Expected Salary*</label>
                    <input
                      type="text"
                      name="expectedSalary"
                      value={formData.expectedSalary}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-900 outline-none py-2 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-700 mb-2">Availability to start work</label>
                    <input
                      type="text"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-gray-300 focus:border-blue-900 outline-none py-2 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* File Upload Section */}
              <div className="mt-8">
                <div className="flex items-center gap-2 mb-4">
                  <input type="checkbox" id="attachFiles" className="w-4 h-4" />
                  <label htmlFor="attachFiles" className="text-sm text-gray-700">
                    Attach Files
                  </label>
                  <span className="text-sm text-gray-500">Attachments ({files.length})</span>
                </div>

                <div
                  className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                    dragActive ? 'border-blue-900 bg-blue-50' : 'border-gray-300'
                  }`}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Drop files here or click to upload</p>
                  <p className="text-sm text-gray-400">PDF, DOC, DOCX (Max 10MB)</p>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.doc,.docx,.xlsx,.pptx"
                    onChange={handleFileInput}
                    className="hidden"
                    id="fileInput"
                  />
                  <label
                    htmlFor="fileInput"
                    className="inline-block mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded cursor-pointer hover:bg-gray-200 transition-colors"
                  >
                    Choose Files
                  </label>
                </div>

                {/* File List */}
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-3 rounded"
                      >
                        <span className="text-sm text-gray-700 truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="text-red-500 hover:text-red-700 ml-4"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full mt-8 bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
              >
                Submit Application
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400 rounded-bl-full"></div>
              <div className="bg-white rounded-2xl p-8 relative z-10 shadow-lg">
                <div className="bg-gray-100 rounded-lg p-8 mb-6">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-green-400 rounded flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="w-12 h-12 bg-blue-400 rounded flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="w-full h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded"></div>
                </div>
              </div>
              <div className="flex gap-2 mt-6 justify-center">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-blue-700'}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}