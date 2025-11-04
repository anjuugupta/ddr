import React from "react";

const MarqueeText = ({
  text = "Go Fully Digital with Payroll & Attendance! Avoid the hassle of old manual registers. Make your organization smart, efficient, and fully digital with our outsourced Payroll & Attendance Services.",
  speed = 18, // lower = faster
}) => {
  return (
    <div className="">

    <div className="w-full overflow-hidden bg-[#ff9433] py-3 ">
      <div className="whitespace-nowrap flex gap-8 group">
        <p
          className="text-white text-sm md:text-lg font-medium inline-block animate-marquee group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${speed}s` }}
        >
          {text}
        </p>

        {/* Duplicate text for infinite loop */}
        <p
          className="text-white text-sm md:text-lg font-medium inline-block animate-marquee group-hover:[animation-play-state:paused]"
          style={{ animationDuration: `${speed}s` }}
        >
          {text}
        </p>
      </div>
    </div>
    </div>
  );
};

export default MarqueeText;
