import React, { useState } from 'react';

export default function ScrollCard() {
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    { number: "01", title: "Payroll Outsourcing", subtitle: `"Silver Pack"`, description: "Payroll Processing without compliance & ESS" },
    { number: "02", title: "Payroll Outsourcing", subtitle: `"Gold Pack"`, description: "Payroll Processing with compliance & No ESS" },
    { number: "03", title: "Payroll Outsourcing", subtitle: `"Platinum Pack"`, description: "Payroll Processing with compliance & ESS" },
    { number: "04", title: "TDS/TCS Return Filing Services", subtitle: "(Form - 24Q,26Q, 27Q, 27EQ)", description: "" },
    { number: "05", title: "Payroll Compliance", subtitle: "(PF, ESIC, PT, & MLWF/LWF)", description: "" }
  ];

  const duplicatedCards = [...cards, ...cards];

  return (
    <div className=" py-46 px-2 sm:px-4 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#383B97] mb-6">
          Service Dashboard
        </h2>
      </div>

      <div className="relative">
        <div
          className={`flex gap-4 sm:gap-6 ${isPaused ? '' : 'animate-scroll'}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedCards.map((card, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-56 sm:w-64 md:w-72 transform transition-transform duration-300 hover:scale-110 hover:z-20"
            >
              <div className="relative bg-white border-2 border-[#6163BEE3] rounded-2xl p-4 sm:p-6 flex flex-col justify-between h-48 sm:h-56 hover:shadow-lg transition-shadow duration-300">
                {/* Card Number */}
                <div className="absolute top-3 right-3 text-gray-400 font-bold text-base sm:text-lg font-fascinate">
                  {card.number}
                </div>

                {/* Content */}
                <div className="flex flex-col items-center justify-center h-full text-center space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">{card.title}</h3>
                  {card.subtitle && <p className="text-orange-500 font-medium text-sm sm:text-base">{card.subtitle}</p>}
                  {card.description && <p className="text-gray-700 text-xs sm:text-sm">{card.description}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-288px * ${duplicatedCards.length / 2} - 24px * ${duplicatedCards.length / 2}));
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
