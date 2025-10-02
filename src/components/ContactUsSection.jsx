import React, { useState } from 'react';

export default function ContactUsSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 1800); // demo smooth popup effect
  };

  return (
    <section className="flex flex-col lg:flex-row items-stretch bg-white min-h-screen px-0">
      {/* Left: Form */}
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-10 lg:px-16 transition-transform duration-700 ease-in-out">
        <form className="space-y-7" autoComplete="off" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-7">
            <div className="flex-1">
              <label className="block mb-2 text-gray-700 font-medium">Name*</label>
              <input
                type="text"
                required
                className="w-full border-b-2 border-orange-300 bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 px-2"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-gray-700 font-medium">Company Name</label>
              <input
                type="text"
                className="w-full border-b-2 border-orange-300 bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 px-2"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-7">
            <div className="flex-1">
              <label className="block mb-2 text-gray-700 font-medium">Email*</label>
              <input
                type="email"
                required
                className="w-full border-b-2 border-orange-300 bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 px-2"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-gray-700 font-medium">Contact Number*</label>
              <input
                type="text"
                required
                className="w-full border-b-2 border-orange-300 bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 px-2"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Message*</label>
            <textarea
              required
              rows={2}
              className="w-full border-b-2 border-orange-300 bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 px-2 resize-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700 font-medium">Location</label>
            <input
              type="text"
              className="w-full border-b-2 border-orange-300 bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 px-2"
            />
          </div>
          <div>
            <label className="block text-gray-800 font-medium">Services (pick number)</label>
            <input
              type="text"
              className="w-full border-b-2 border-orange-300 bg-transparent focus:border-indigo-500 transition-all duration-300 outline-none py-2 px-2"
              placeholder="e.g., 1,2,4"
            />
            <small className="text-gray-400 block mt-2 px-1">
              Services: 1-Payroll Outsourcing, 2-Asset Outsourcing, 3-TDS Outsourcing, 4-Payroll Compliance
            </small>
          </div>
          <div className="flex items-center gap-2 pt-2">
            <label className="cursor-pointer flex items-center gap-2 text-gray-600 font-medium">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#8b5cf6"><path d="M3.055 11h8.097l-2.944-3.412c-.071-.073-.117-.191-.117-.33 0-.234.191-.424.425-.424.123 0 .249.047.309.119l3.603 4.045l4.029-4.052a.423.423 0 0 1 .308-.119c.234 0 .425.19.425.425c0 .139-.047.257-.117.33L13.846 11h8.099c.234 0 .425.19.425.425c0 .234-.191.424-.425.424H3.055a.425.425 0 0 1-.425-.424c0-.234.191-.425.425-.425z"></path></svg>
              Attach Files
            </label>
            <span className="text-xs text-gray-500 ml-auto">Attachments (0)</span>
          </div>
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-indigo-600 w-4 h-4" />
              <span className="text-gray-700 text-sm">
                Sign up for our email list for updates, promotions, and more.
              </span>
            </label>
          </div>
          <button type="submit"
            className="w-full bg-indigo-400 text-white font-medium rounded-md py-3 mt-2 transition-colors duration-300 hover:bg-indigo-600 focus:outline-none"
          >
            {submitted ? "Request Submitted!" : "Submit Your Request"}
          </button>
        </form>
      </div>
      {/* Right: Contact Info Block */}
      <div className="bg-indigo-400 text-white shadow-xl flex flex-col justify-center p-10 md:max-w-md lg:w-[420px] rounded-tl-3xl rounded-bl-none rounded-tr-none rounded-br-3xl transition-all duration-700 ease-in-out">
        <div>
          <h3 className="text-2xl font-bold mb-2">Address</h3>
          <div className="text-sm leading-6 mb-5">
            Mumbai: A-808, Deep Classic Tower, Yashwant Smart City, Vasai East Mumbai, Maharashta-401208
            <br /><br />
            Gurgaon: 1st Floor Alt F, Orchid Business Park, Sohna Road, Sector 48, Gurgaon 122004 Haryana
          </div>
          <h3 className="font-bold text-xl mt-4 mb-2">Contact</h3>
          <div className="mb-5 space-y-1">
            <div>9987320764</div>
            <div>
              <a href="mailto:contact@ddrmanagement.com" className="underline text-white hover:text-orange-200 transition-colors">
                contact@ddrmanagement.com
              </a>
            </div>
          </div>
          <h3 className="font-bold text-xl mt-4 mb-2">Working Hours</h3>
          <div className="mb-5">Open Today &nbsp; <span className="font-bold">10:00 am – 07:00 pm</span></div>
          <h3 className="font-bold text-xl mt-4 mb-2">Also Available At</h3>
          <div>Delhi-NCR, Lucknow, Varanasi, Purvanchal</div>
        </div>
      </div>
    </section>
  );
}
