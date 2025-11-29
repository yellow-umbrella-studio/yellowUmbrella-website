import React from "react";
import { Umbrella, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo Section */}
          <div className="mb-6 flex items-center space-x-3">
            <Umbrella className="text-yellow-400" size={32} strokeWidth={2.5} />
            <span className="text-lg font-bold text-white">
              Yellow Umbrella Studio
            </span>
          </div>

          {/* Links */}
          <div className="mb-6 flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <span className="text-gray-600">•</span>
            <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
              Terms of Service
            </a>
            <span className="text-gray-600">•</span>
            <a href="mailto:yoni7022@gmail.com" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()} Yellow Umbrella Studio. Made with</span>
              <Heart className="text-yellow-400 fill-yellow-400" size={16} />
              <span>All rights reserved.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
