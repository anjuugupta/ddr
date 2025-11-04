const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 bg-white relative overflow-hidden">
      {/* 🔵 Blue Spot (Top Right) */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-[100px] z-0"></div>

      {/* 🟠 Orange Spot (Bottom Right) */}
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-orange-400 rounded-full opacity-20 blur-[110px] z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-3">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
          Delivering comprehensive web solutions tailored to your business needs
        </p>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          {/* Main Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[3px] bg-blue-600 -translate-y-1/2"></div>

          {/* Timeline Container */}
          <div className="relative grid grid-cols-4 gap-4">
            {/* Item 1 - End-to-End Solution (Top) */}
            <div className="relative flex flex-col items-center pt-24">
              <div className="absolute top-0 left-1/2 w-[3px] h-24 bg-blue-600 -translate-x-1/2"></div>
              <div className="absolute top-24 left-1/2 w-5 h-5 bg-blue-600 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg z-10"></div>
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow w-full">
                <h3 className="text-blue-700 font-bold text-base mb-2 text-center">
                  End-to-End Solution
                </h3>
                <p className="text-gray-700 text-sm text-center leading-relaxed">
                  From domain registration to deployment & maintenance, we handle everything.
                </p>
              </div>
            </div>

            {/* Item 2 - Business Integration (Bottom) */}
            <div className="relative flex flex-col items-center pb-24">
              <div className="absolute top-0 left-1/2 w-5 h-5 bg-blue-600 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg z-10"></div>
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow w-full">
                <h3 className="text-blue-700 font-bold text-base mb-2 text-center">
                  Business Integration
                </h3>
                <p className="text-gray-700 text-sm text-center leading-relaxed">
                  Seamless links with ERP, CRM, HRMS, and other business applications.
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 w-[3px] h-24 bg-blue-600 -translate-x-1/2"></div>
            </div>

            {/* Item 3 - Future-Ready Design (Top) */}
            <div className="relative flex flex-col items-center pt-24">
              <div className="absolute top-0 left-1/2 w-[3px] h-24 bg-blue-600 -translate-x-1/2"></div>
              <div className="absolute top-24 left-1/2 w-5 h-5 bg-blue-600 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg z-10"></div>
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow w-full">
                <h3 className="text-blue-700 font-bold text-base mb-2 text-center">
                  Future-Ready Design
                </h3>
                <p className="text-gray-700 text-sm text-center leading-relaxed">
                  Websites are built to scale as your business grows.
                </p>
              </div>
            </div>

            {/* Item 4 - Dedicated Support (Bottom) */}
            <div className="relative flex flex-col items-center pb-24">
              <div className="absolute top-0 left-1/2 w-5 h-5 bg-blue-600 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg z-10"></div>
              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow w-full">
                <h3 className="text-blue-700 font-bold text-base mb-2 text-center">
                  Dedicated Support
                </h3>
                <p className="text-gray-700 text-sm text-center leading-relaxed">
                  Stay secure and updated with our expert team's ongoing support.
                </p>
              </div>
              <div className="absolute bottom-0 left-1/2 w-[3px] h-24 bg-blue-600 -translate-x-1/2"></div>
            </div>
          </div>

          {/* End Dots */}
          <div className="absolute top-1/2 left-0 w-5 h-5 bg-blue-600 rounded-full -translate-y-1/2 shadow-lg"></div>
          <div className="absolute top-1/2 right-0 w-5 h-5 bg-blue-600 rounded-full -translate-y-1/2 shadow-lg"></div>
        </div>

        {/* Mobile Version - Vertical Timeline */}
        <div className="md:hidden mt-10 space-y-8 relative">
          <div className="absolute left-[22px] top-3 bottom-3 w-[3px] bg-blue-600"></div>

          {[
            {
              title: "End-to-End Solution",
              desc: "From domain registration to deployment & maintenance, we handle everything.",
            },
            {
              title: "Business Integration",
              desc: "Seamless links with ERP, CRM, HRMS, and other business applications.",
            },
            {
              title: "Future-Ready Design",
              desc: "Websites are built to scale as your business grows.",
            },
            {
              title: "Dedicated Support",
              desc: "Stay secure and updated with our expert team's ongoing support.",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-5 items-start relative">
              <span className="w-6 h-6 bg-blue-600 rounded-full mt-1 shadow-lg flex-shrink-0 z-10 border-4 border-white"></span>

              <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200 shadow-sm flex-1">
                <h3 className="text-blue-700 font-bold text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
