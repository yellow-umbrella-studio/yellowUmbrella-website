import React from "react";
import { Sparkles, Code, Smartphone, Globe } from "lucide-react";
import Link from "next/link";

const BuildYourDream = () => {
  return (
    <div id="services" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Sparkles className="text-yellow-400" size={48} strokeWidth={2} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            We Make Dreams Come True
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have an amazing idea for a game, app, or website? We turn your vision into reality.
            From concept to launch, we build custom solutions that captivate and engage your audience.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Mobile Games */}
          <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl hover:border-yellow-400 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-400/10 p-4 rounded-xl">
                <Smartphone className="text-yellow-400" size={40} strokeWidth={2} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Mobile Games
            </h3>
            <p className="text-gray-400 text-center leading-relaxed">
              Engaging, addictive mobile games for iOS and Android that keep players coming back for more.
            </p>
          </div>

          {/* Mobile Apps */}
          <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl hover:border-yellow-400 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-400/10 p-4 rounded-xl">
                <Code className="text-yellow-400" size={40} strokeWidth={2} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Mobile Apps
            </h3>
            <p className="text-gray-400 text-center leading-relaxed">
              Custom mobile applications built with cutting-edge technology and user-focused design.
            </p>
          </div>

          {/* Websites */}
          <div className="bg-slate-800 border border-slate-700 p-8 rounded-2xl hover:border-yellow-400 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-400/10 p-4 rounded-xl">
                <Globe className="text-yellow-400" size={40} strokeWidth={2} />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-4">
              Websites
            </h3>
            <p className="text-gray-400 text-center leading-relaxed">
              Modern, responsive websites that showcase your brand and convert visitors into customers.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Ready to Bring Your Idea to Life?
            </h3>
            <p className="text-slate-800 text-lg mb-6">
              Let's discuss your project and create something amazing together.
            </p>
            <Link href="/services-inquiry">
              <button className="inline-block bg-slate-900 text-white font-bold py-4 px-8 rounded-xl hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Get In Touch
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildYourDream;
