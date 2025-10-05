import React, { useState } from "react";

// Sample data structure for dynamic steps/pages (add as needed for pagination)
const pages = [
  {
    fields: [
      { label: "Full Name", required: true, type: "text", name: "fullName" },
      { label: "Contact", required: true, type: "text", name: "contact" },
      { label: "Email", required: true, type: "email", name: "email" },
      { label: "Highest Qualification", required: false, type: "text", name: "qualification" },
      { label: "Job Title", required: false, type: "text", name: "jobTitle" },
    ],
    rightFields: [
      { label: "Preferred Location", required: false, type: "text", name: "location" },
      { label: "Work Experiences", required: false, type: "text", name: "experience" },
      { label: "Previous Employee", required: false, type: "text", name: "previousEmployee" },
      { label: "Expected Salary", required: false, type: "text", name: "salary" },
      { label: "Availability to start work", required: false, type: "text", name: "availability" },
    ],
    showAttachment: true,
  },
  // You can add more steps/pages here for dynamic pagination
];

export default function CareerForm() {
  const [page, setPage] = useState(0);
  const [files, setFiles] = useState([]);
  const totalPages = pages.length;

  const handleFileChange = (e) => setFiles([...e.target.files]);
  const current = pages[page];

  return (
    <div className="min-h-screen bg-white flex flex-col px-2 md:px-0 py-6 items-center justify-center">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-center text-gray-800">
        Just submit your CV and we will find a better job for you.
      </h2>
      
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 relative z-10">
        {/* Form Section */}
        <form className="flex-1 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-3">
              {current.fields.map((field, i) => (
                <div key={i}>
                  <label className="block text-xs md:text-sm text-gray-700 mb-1">
                    {field.label}{field.required && "*"}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full border-b-2 border-yellow-200 focus:border-indigo-400 bg-transparent py-2 px-2 outline-none transition"
                    required={field.required}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3">
              {current.rightFields.map((field, i) => (
                <div key={i}>
                  <label className="block text-xs md:text-sm text-gray-700 mb-1">
                    {field.label}{field.required && "*"}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    className="w-full border-b-2 border-yellow-200 focus:border-indigo-400 bg-transparent py-2 px-2 outline-none transition"
                    required={field.required}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Attachments */}
          {current.showAttachment && (
            <div className="mt-5 flex flex-col md:flex-row md:items-center gap-2 w-full">
              <label className="flex items-center cursor-pointer text-indigo-600 text-sm">
                <input
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="mr-1">&#128206; Attach Files</span>
              </label>
              <span className="text-gray-500 text-xs ml-2">
                Attachments ({files.length})
              </span>
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-4 bg-indigo-300 hover:bg-indigo-500 text-white font-medium px-4 py-2 rounded transition"
          >
            Submit
          </button>
        </form>

        {/* Illustration Section */}
        <div className="relative flex flex-col items-center mt-8 md:mt-10">
          {/* Large colored square */}
          <div className="absolute -top-10 right-0 w-32 h-6 bg-indigo-200 rounded-lg z-0"></div>
          {/* Dots icon */}
          <div className="absolute top-24 -left-8 z-10">
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={i}
                  className="w-2 h-2 bg-indigo-200 rounded-full"
                ></span>
              ))}
            </div>
          </div>
          {/* Main Image */}
          <div className="relative w-48 h-48 rounded-xl overflow-hidden border-8 border-orange-200 bg-white z-20">
            <img
              src="/images/cv-placeholder.jpg" // Replace with your image path
              alt="Desk Illustration"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Pagination Controls (if multiple steps/pages) */}
      {totalPages > 1 && (
        <div className="mt-4 flex items-center justify-center gap-8">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="px-3 py-1 text-base border rounded disabled:opacity-30"
          >
            {"←"}
          </button>
          <span className="text-gray-600">{page + 1} / {totalPages}</span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="px-3 py-1 text-base border rounded disabled:opacity-30"
          >
            {"→"}
          </button>
        </div>
      )}

      {/* Footer/Protection */}
      <div className="mt-12 text-xs text-gray-500 text-center">
        This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </div>
    </div>
  );
}
