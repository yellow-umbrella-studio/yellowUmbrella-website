import React from 'react';
import { Umbrella } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <Umbrella className="text-yellow-400 mr-4" size={78} />
          </div>
          <div className="text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Yellow Umbrella Studio. All rights reserved.</p>
            <div className="mt-2">
              <a href="#" className="text-gray-300 hover:text-white mx-2">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white mx-2">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;