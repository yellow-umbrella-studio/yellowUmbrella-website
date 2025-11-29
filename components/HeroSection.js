import React from "react";
import { Umbrella } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Umbrella className="text-yellow-400" size={32} strokeWidth={2.5} />
            <span className="text-lg md:text-xl font-bold text-white">
              Yellow Umbrella
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("games")}
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200"
            >
              Our Games
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Hero Banner Section */}
      <div className="bg-slate-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white fade-in-up">
            YELLOW UMBRELLA
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white fade-in-up">
            STUDIOS
          </h1>
          {/* <p
            className="text-lg md:text-xl text-gray-400 font-normal fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            STUDIOS
          </p> */}
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
