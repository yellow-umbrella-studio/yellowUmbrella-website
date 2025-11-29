import React from "react";

const AboutUs = () => {
  return (
    <div id="about" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 scroll-fade-in">
            About Us
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <p className="text-lg md:text-xl text-slate-700 leading-relaxed text-center scroll-fade-in">
          Yellow Umbrella Studio creates addictive word games and brain-teasing
          puzzles that challenge your mind and keep you entertained. From word
          associations to number puzzles, our games are designed to be fun,
          engaging, and perfect for players of all ages.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
