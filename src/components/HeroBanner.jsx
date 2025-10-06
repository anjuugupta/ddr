import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import hero from "../assets/hero.png"

const HeroBanner = ({
  title = "DDR MANAGEMENT OUTSOURCING",
  dynamicWord = "SERVICES",
  paragraphs = [
    "Empower your ideas with modern solutions, designed for speed and scalability.",
    "Collaborate with your team seamlessly and bring your vision to life.",
    "Experience cutting-edge performance and stunning design."
  ],
  buttonText = "Get Started",
  buttonLink = "#",
  backgroundImage = hero,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  // Typewriter effect for the dynamic word
  useEffect(() => {
    const handleTyping = () => {
      const fullText = dynamicWord;
      setTypedWord((prev) => 
        isDeleting 
          ? fullText.substring(0, prev.length - 1) 
          : fullText.substring(0, prev.length + 1)
      );

      if (!isDeleting && typedWord === fullText) {
        setTimeout(() => setIsDeleting(true), 1000); // wait 1s before deleting
      } else if (isDeleting && typedWord === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timeout = setTimeout(handleTyping, isDeleting ? 100 : 150); // faster delete
    return () => clearTimeout(timeout);
  }, [typedWord, isDeleting, dynamicWord, loopNum]);

  // Paragraph cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % paragraphs.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [paragraphs.length]);

  return (
    <section
      className="relative w-full h-[90vh] flex items-center justify-center bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      <div className="relative z-10 max-w-4xl text-center ">
        {/* Title with dynamic word */}
     <motion.h1
  initial={{ y: -120, opacity: 0 }}
  animate={{ y: -100, opacity: 1 }} 
  transition={{ duration: 0.8 }}
  className="text-4xl md:text-6xl font-extrabold text-black drop-shadow-lg"
>
  {title}{" "}
  <span className="text-[#FF9433C4]">
    {typedWord}
    <span className="border-r-2 border-white animate-pulse ml-1" />
  </span>
</motion.h1>


      

        {/* Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8"
        >
          <a
            href={buttonLink}
            className="inline-block px-6 py-3 rounded-2xl bg-[#383B97] text-white font-semibold text-lg shadow-lg hover:bg-indigo-700 hover:scale-105 transition transform duration-300"
          >
            {buttonText}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent"></div>
    </section>
  );
};

export default HeroBanner;
