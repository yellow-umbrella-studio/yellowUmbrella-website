import React from 'react';
import { Mail } from 'lucide-react';

const ContactUs = () => {
  return (
    <div id="contact" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a question, suggestion, or just want to say hello? We'd love to hear from you!
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full mb-6">
            <Mail className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h3>
          <p className="text-gray-600 mb-6">
            Ready to start a conversation? Drop us an email and we'll get back to you as soon as possible.
          </p>
          <a 
            href="mailto:yoni7022@gmail.com" 
            className="inline-flex items-center space-x-3 bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Mail size={24} />
            <span>yoni7022@gmail.com</span>
          </a>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
              <span className="text-yellow-600 font-bold text-xl">💡</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Ideas & Feedback</h4>
            <p className="text-gray-600">Share your thoughts on our games or suggest new features</p>
          </div>
          
          <div className="p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
              <span className="text-yellow-600 font-bold text-xl">🤝</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Partnerships</h4>
            <p className="text-gray-600">Interested in collaborating? Let's explore opportunities together</p>
          </div>
          
          <div className="p-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-4">
              <span className="text-yellow-600 font-bold text-xl">🛠️</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Support</h4>
            <p className="text-gray-600">Need help with one of our games? We're here to assist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;