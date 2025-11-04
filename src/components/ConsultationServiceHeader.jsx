
import bottomwave from "../assets/bottomwave.png"
import consultation from "../assets/conseltant.png"
const ConsultationServiceHeader = () => {
  return (
    <section className="w-full relative overflow-hidden">
    
  {/* 🔵 Blue Spot (Top Right) */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-blue-500 rounded-full opacity-20 blur-[100px] z-0"></div>

      {/* 🟠 Orange Spot (Bottom Right) */}
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-400 rounded-full opacity-20 blur-[110px] z-0"></div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="flex flex-col items-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-orange-500 mb-8 md:mb-12 text-center">
           Consultation Services
          </h2>

          {/* Main Illustration Image */}
          <div className="w-100">
            <img 
              src={consultation}
              alt="Person learning online" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom Wave Background Image */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48">
        <img 
          src={bottomwave}
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ConsultationServiceHeader;