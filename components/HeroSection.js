import React from 'react';
import { Umbrella } from 'lucide-react';
import { 
    Gamepad2, Dice, Trophy, Puzzle, Target, Joystick, 
    Smartphone, Wifi, Clock, Zap, Crown, Heart 
  } from 'lucide-react';

const HeroSection = () => {
  
  return (
    <div className="relative bg-gray-900 overflow-hidden h-screen flex items-center justify-center">
      {/* Background game images */}
     

      {/* Content */}
      <div className="text-center z-10">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl flex items-center justify-center">
          <Umbrella className="text-yellow-400 mr-4" size={78} />
          Yellow Umbrella Studio
        </h1>
      </div>

      {/* Curved bottom */}
      <div className="absolute bottom-0 inset-x-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;