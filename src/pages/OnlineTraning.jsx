import react from 'react'
import OnlineTraningHeader from '../components/OnlineTraningHeader'
import Footer from '../components/Footer'
import one from "../assets/onlinetraning/one.jpg"
import two from "../assets/onlinetraning/two.jpg"
import three from "../assets/onlinetraning/three.jpg"
import four from "../assets/onlinetraning/four.jpg"
import five from "../assets/onlinetraning/five.jpg"
import trainingImg from "../assets/highlight.jpg"
import payrollcompliance from "../assets/payrollcompliance.jpg"

function OnlineTraning() {
 const modules = [
    {
      img: one,
      title: "Employee Management",
      desc: "Add, update, and manage employee information, onboarding, and exits.",
    },
    {
      img: two,
      title: "Attendance & Leave",
      desc: "Track attendance, manage leave requests, and handle shift policies.",
    },
    {
      img: three,
      title: "Payroll & Salary",
      desc: "Understand salary structures, automate calculations, and generate payslips.",
    },
    {
      img: four,
      title: "Reports & Analytics",
      desc: "Access, interpret, and customize HR reports for better insights.",
    },
    {
      img: five,
      title: "Best Practices",
      desc: "Navigate HRMS efficiently, save time, and troubleshoot common issues.",
    },
    {
      img: payrollcompliance,
  title: "Payroll Compliance",
  desc: "Understand key statutory components like PF, ESIC, PT, and LWF to ensure accurate payroll processing."
}
  ];

    const highlights = [
    "Join From Anywhere At Your Convenience.",
    "Live Demos, Hands-On Exercises, And Q&A.",
    "Suitable For Individuals And Teams.",
    "Access Training Materials And Recordings Anytime.",
  ];

  const benefits = [
    "Gain a solid understanding of HRMS functionalities.",
    "Improve efficiency and reduce errors in HR processes.",
    "Become confident in managing routine HR tasks independently.",
  ];

  return (

<>
<OnlineTraningHeader/>
<section className="w-full py-16 px-4 md:px-10 bg-white">
      {/* Heading & Description */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2C2C2C]">
          Master TDS & TCS with Complete Online Training
        </h2>
        <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
          Boost your expertise in TDS (Tax Deducted at Source) and TCS (Tax Collected at Source) with 
          comprehensive online training. Master all key sections, calculations, deductions, and exemptions, 
          and gain practical experience in return filing. Enjoy hands-on exercises, real-world examples, and 
          step-by-step guidance—ideal for CA students, finance professionals, HR/payroll staff, and business owners.
        </p>
      </div>

      {/* Feature Pills */}
      <div className="max-w-5xl mx-auto mt-10 flex flex-wrap justify-center gap-3">
        {[
          "Detailed Coverage of All TDS/TCS Sections",
          "Practical Challan Generation and Return Filing (24Q, 26Q, 27Q & 27EQ)",
          "Form 16/16A Preparation and Reconciliation",
          "Updated with the Latest Income Tax Rules",
          "Self-paced Learning with Easy-to-Follow Modules",
        ].map((item, i) => (
          <div
            key={i}
            className="border border-[#BFD3FF] bg-[#EEF4FF] text-[#1A2B6B] text-xs md:text-sm px-4 py-2 rounded-full shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Who Should Attend Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h3 className="text-center text-2xl md:text-3xl font-semibold text-[#2C2C2C]">
          Who Should Attend
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {[
            {
              no: "01",
              title: "CA Students",
              desc: "looking to strengthen practical knowledge of TDS and TCS",
            },
            {
              no: "02",
              title: "Finance Professionals",
              desc: "handling tax compliance, payroll, or accounting",
            },
            {
              no: "03",
              title: "HR and Payroll Staff",
              desc: "responsible for salary processing and statutory deductions",
            },
            {
              no: "04",
              title: "Business Owners & Entrepreneurs",
              desc: "seeking to understand TDS/TCS obligations",
            },
            {
              no: "05",
              title: "Anyone",
              desc: "aiming to gain hands-on experience in TDS/TCS calculations, challan generation, return filing, and Form 16/16A preparation",
            },
            
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-[#C7A985] bg-[#F7EAD8] flex items-center justify-center font-bold text-[#C19154]">
                {item.no}
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                <span className="font-semibold text-[#2C2C2C]">{item.title}</span> {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Highlight Line */}
      <p className="text-center text-gray-700 mt-10 font-medium italic">
        Start your journey to TDS/TCS expertise and ensure accurate compliance and smooth tax processes.
      </p>
    </section>

    {/* Card section */}
     <section className="w-full py-14 px-5 md:px-10 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A2B6B]">
          Empower Your Career with HRMS Skills
        </h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
          Looking to learn and master HRMS systems?
          <br className="hidden md:block" />
          Our online training program is designed for anyone who wants to understand HRMS features and
          use them efficiently.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {modules.map((item, i) => (
          <div
            key={i}
            className="bg-white shadow-md border border-gray-200 rounded-xl p-6 w-full max-w-sm text-center hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="w-16 h-16 mx-auto ">
              <img src={item.img} alt={item.title} className="w-full h-full object-contain rounded-full" />
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-[#1A2B6B] mt-4">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base mt-2 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* Traning Highlight */}
     <section className="w-full px-5 md:px-12 py-14 md:py-20">
      {/* Training Highlight Title */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#1A2B6B] mb-8">
        Training Highlight
      </h2>

      {/* Highlight Card */}
      <div className="bg-[#2234A7] text-white rounded-2xl p-6 md:p-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-6 shadow-lg">
        {/* Left Feature List */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {[
            { title: "Fully Online", desc: highlights[0] },
            { title: "Interactive Sessions", desc: highlights[1] },
            { title: "Flexible Schedule", desc: highlights[2] },
            { title: "Resources Provided", desc: highlights[3] },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white text-[#1A2B6B] rounded-lg shadow-sm px-4 py-3 text-sm md:text-base"
            >
              <strong>{item.title}</strong>
              <div className="text-gray-600 text-xs md:text-sm">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Image Right Side */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={trainingImg}
            alt="Training"
            className="w-full rounded-2xl max-w-xs md:max-w-sm object-contain"
          />
        </div>
      </div>

      {/* Who Should Attend */}
      <div className="text-center max-w-3xl mx-auto mt-16">
        <h3 className="text-xl md:text-2xl font-semibold text-[#1A2B6B] mb-4">
          Who Should Attend
        </h3>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          • Anyone interested in learning HRMS systems. <br />
          • HR professionals, payroll executives, and employees who want to
          self-manage HR tasks.
        </p>
      </div>

      {/* Benefits */}
      <div className="bg-[#FFF7ED] mt-12 p-8 md:p-12 rounded-lg text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-[#1A2B6B] mb-6">
          Benefits
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 text-sm md:text-base max-w-5xl mx-auto">
          {benefits.map((item, i) => (
            <p key={i} className="leading-relaxed">
              • {item}
            </p>
          ))}
        </div>
      </div>

      {/* Footer CTA Text */}
      <p className="text-center mt-10 text-gray-700 text-xl md:text-2xl">
        <span className="text-[#1A2B6B] font-semibold italic text-base md:text-2xl">
          Enroll today
        </span>{" "}
        and take the first step towards
        <span className="font-semibold"> mastering HRMS!</span>
      </p>
    </section>
<Footer/>
</>
    
  )
}

export default OnlineTraning
