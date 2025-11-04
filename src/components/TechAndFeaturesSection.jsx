import { Code2, Server, Library, Cloud, CheckCircle } from "lucide-react";
import offer from "../assets/offer.png";


const techData = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Front-end",
    desc: "HTML, CSS3, Javascript, React, Next.js",
  },
  {
    icon: <Server className="w-8 h-8" />,
    title: "Back-end",
    desc: "Node.js, PHP, Python (Django, Flask)",
  },
  {
    icon: <Library className="w-8 h-8" />,
    title: "Content Management",
    desc: "WordPress, Shopify, Custom CMS",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Hosting",
    desc: "AWS, Google Cloud, Azure",
  },
];

const features = [
  "Responsive, mobile-first design",
  "SEO-ready structure and metadata",
  "Social media & API integration",
  "Fast, optimized page speed",
  "Multi-language support",
  "Custom dashboards & analytics",
  "Maintenance & regular updates",
];

const TechAndFeaturesSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      {/* Technology Section */}
      <div className="relative py-10">

        {/* 🔵 Blue Spot – Right Side */}
        <div className="hidden md:block absolute top-10 right-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

        {/* 🟠 Orange Spot – Left Side */}
        <div className="hidden md:block absolute bottom-10 left-0 w-64 h-64 bg-orange-400/20 blur-[120px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#383B97]">
            Technology We Use
          </h2>
          <p className="text-gray-600 mt-2">
            Your website is built using the most reliable and modern tech
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {techData.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-[28px] py-6 px-6 flex flex-col items-center gap-3 shadow-[0_8px_25px_rgba(56,59,151,0.25)] border border-gray-200 hover:shadow-[0_8px_35px_rgba(56,59,151,0.35)] transition-all"
              >
                {/* Blue Pill Top Bar */}
                <div className="absolute top-1 mx-auto left-1/2 -translate-x-1/2 w-24 h-2 bg-[#383B97] rounded-full"></div>

                {/* Icon */}
                <div className="text-[#383B97] text-4xl">{item.icon}</div>

                {/* Title */}
                <h3 className="font-semibold text-gray-800 text-lg">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed text-center px-2">
                  {item.desc}
                </p>
              </div>

            ))}
          </div>
        </div>
      </div>


      {/* Features Section */}
      <div className="relative max-w-7xl mx-auto px-6 mt-20">

  {/* 🔵 Blue Spot (Top Right) */}
  <div className="absolute right-0 top-0 w-60 h-60 bg-blue-500 opacity-20 blur-[90px] rounded-full z-0"></div>

  {/* 🟠 Orange Spot (Bottom Right) */}
  <div className="absolute right-10 bottom-0 w-72 h-72 bg-orange-400 opacity-20 blur-[110px] rounded-full z-0"></div>

  <div className="relative z-10">
    <h2 className="text-2xl md:text-3xl font-semibold text-[#2741D0]">
      Features We Offer
    </h2>
    <p className="text-gray-600 mt-2">
      Your website is built using the most reliable and modern tech
    </p>

    <div className="flex flex-col lg:flex-row justify-between items-center mt-10 gap-10">
      
      {/* Feature List */}
      <ul className="space-y-4 text-gray-700 text-[15px] w-full lg:w-1/2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#2741D0] mt-1" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Icons Section */}
      <div className="flex gap-4 w-full lg:w-1/2 justify-items-center">
        <img src={offer} className="w-full object-contain" />
      </div>
    </div>
  </div>
</div>

    </section>
  );
};

export default TechAndFeaturesSection;
