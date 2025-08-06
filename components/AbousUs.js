import React from 'react';

const AboutUs = () => {
  return (
    <div id="about" className="bg-white py-20 px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
            About Us
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Yellow Umbrella Studio is a passionate team of games and app developers dedicated to creating fun, educational, and innovative mobile experiences.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With our diverse skills and creative mindset, we strive to bring joy and excitement to users around the world through our unique app experiences.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Mobile game development</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Educational app creation</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">Interactive entertainment</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">User experience design</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            To become a leading mobile entertainment studio that creates memorable experiences, 
            fostering creativity, learning, and fun in every interaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;