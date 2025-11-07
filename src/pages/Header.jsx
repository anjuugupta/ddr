import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { href, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  // { name: "Apply For Jobs", href: "/jobs" },
  { name: "Software Solutions", href: "/software" },
  {name: "Website Solutions", href: "/website"},
  {name: "Online Traning", href: "/online-traning"},
  {name: "Consultation Services", href: "/consultation"}
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const location = useLocation();
  const activeSection = location.pathname;

  // Detect scroll for enhanced glass effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-lg"
            : "bg-white/50 backdrop-blur-md shadow-md"
        }`}
        style={{
          backdropFilter: scrolled
            ? "blur(20px) saturate(180%)"
            : "blur(12px) saturate(150%)",
          WebkitBackdropFilter: scrolled
            ? "blur(20px) saturate(180%)"
            : "blur(12px) saturate(150%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center transform transition-transform duration-300 hover:scale-105">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex flex-1 justify-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-4 py-2 font-semibold transition-all duration-300 group ${
                    activeSection === item.href
                      ? "text-orange-600"
                      : "text-gray-700 hover:text-orange-600"
                  }`}
                >
                  {item.name}

                  {/* Animated underline */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform origin-left transition-transform duration-300 ${
                      activeSection === item.href
                         ? "text-blue-600"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />

                  {/* Glow effect on active */}
                  {activeSection === item.href && (
                    <span className="absolute inset-0 bg-blue-100/30 rounded-lg blur-sm -z-10" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-gray-700 hover:bg-white/50 hover:text-blue-600 transition-all duration-300 backdrop-blur-sm"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Dark Overlay */}
        <div
          className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        />

        {/* Sidebar Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white/80 backdrop-blur-2xl shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backdropFilter: "blur(20px) saturate(180%)",
            WebkitBackdropFilter: "blur(20px) saturate(180%)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          {/* Close button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 p-2 text-gray-700 hover:text-blue-600 hover:bg-white/50 rounded-lg transition-all duration-300"
          >
            <X size={24} />
          </button>

          {/* Menu items */}
          <nav className="mt-16 px-6 space-y-3">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={toggleMenu}
                className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform ${
                  activeSection === item.href
                    ? "text-blue-600 bg-blue-50/80 shadow-md scale-105"
                    : "text-gray-700 hover:text-blue-600 hover:bg-white/50 hover:scale-105"
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen
                    ? "slideInRight 0.3s ease-out forwards"
                    : "none",
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Decorative gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/10 to-transparent pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
