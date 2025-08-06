import React from 'react';
import Image from 'next/image';

const games = [
  {
    id: 1,
    title: 'TimeGuess',
    icon: '/images/TimeGuess.png',
    appStore: 'https://apps.apple.com/us/app/timeguess-when-and-where/id6720755290',
    playStore: 'https://play.google.com/store/apps/details?id=com.yonigold.WhereTaken',
  },
  {
    id: 2,
    title: 'Brainrot Quiz',
    icon: '/images/brainrot.webp',
    appStore: 'https://apps.apple.com/us/app/brainrot-quiz-ttiktok-quiz/id6572299416',
    playStore: 'https://play.google.com/store/apps/details?id=com.yonigold.brainrotquiz',
  },
  {
    id: 3,
    title: 'Cars Trivia',
    icon: '/images/carsTrivia.jpg',
    appStore: 'https://apps.apple.com/us/app/cars-quiz-car-trivia-game/id6670433734',
    playStore: 'https://play.google.com/store/apps/details?id=com.yellowUmbrella.carTrivia',
  },
  {
    id: 4,
    title: 'Netflix Quiz',
    icon: '/images/netquiz.webp',
    appStore: 'https://apps.apple.com/us/app/netquiz-tv-shows-trivia/id6736584614',
    playStore: 'https://play.google.com/store/apps/details?id=com.yonigold.NetflixQuiz',
  },
];

const GameCard = ({ game }) => (
  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
    <div className="relative overflow-hidden">
      <Image 
        src={game.icon} 
        alt={game.title} 
        width={300} 
        height={300} 
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{game.title}</h3>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        {game.appStore && (
          <a 
            href={game.appStore} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <Image src="/images/appstore.png" alt="Download on the App Store" width={140} height={42} className="mx-auto" />
          </a>
        )}
        {game.playStore && (
          <a 
            href={game.playStore} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transform hover:scale-105 transition-transform duration-200"
          >
            <Image src="/images/google.png" alt="Get it on Google Play" width={140} height={42} className="mx-auto" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const OurGames = () => {
  return (
    <div id="games" className="bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">Our Games</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our collection of engaging mobile games designed to entertain, educate, and challenge players of all ages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">More exciting games coming soon!</p>
          <div className="inline-flex items-center space-x-2 text-yellow-600">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurGames;