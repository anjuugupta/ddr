import { useState } from "react";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

const menuItems = [
  { name: "Home", href: "#", current: true },
  { name: "Our Services", href: "#" },
  { name: "Apply For Jobs", href: "#" },
  { name: "Software Solution", href: "#" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 justify-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors duration-200 ${
                  item.current
                    ? "border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Dark Overlay */}
        <div
          className={`absolute inset-0 bg-[#00000038] bg-opacity-50 transition-opacity ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMenu}
        ></div>

        {/* Sidebar Panel */}
        <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg p-6">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-gray-700 hover:text-blue-600"
          >
            <X size={24} />
          </button>

          <nav className="mt-12 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block font-medium ${
                  item.current
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
