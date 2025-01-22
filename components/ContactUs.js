import React from 'react';
import { Mail } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
          Contact Us
        </h2>
        <div className="flex items-center justify-center space-x-2 text-xl text-gray-600">
          <Mail className="text-yellow-500" size={24} />
          <a href="mailto:contact@yellowumbrella.studio" className="hover:underline">
            yoni7022@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;