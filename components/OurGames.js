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
    appStore: null,
    appStore: 'https://apps.apple.com/us/app/netquiz-tv-shows-trivia/id6736584614',
    playStore: 'https://play.google.com/store/apps/details?id=com.yonigold.NetflixQuiz',
  },
];

const GameCard = ({ game }) => (
  <div className="flex flex-col items-center space-y-4 bg-gray-100 p-6 rounded-xl w-80 mx-auto"> {/* Increased width and padding */}
    <Image src={game.icon} alt={game.title} width={148} height={148} className="rounded-2xl object-cover" />
    <h3 className="text-2xl font-semibold text-center">{game.title}</h3>
    <div className="flex space-x-4 mt-4">
      {game.appStore && (
        <a href={game.appStore} target="_blank" rel="noopener noreferrer" className="block">
          <Image src="/images/appstore.png" alt="Download on the App Store" width={140} height={60} />
        </a>
      )}
      {game.playStore && (
        <a href={game.playStore} target="_blank" rel="noopener noreferrer" className="block">
          <Image src="/images/google.png" alt="Get it on Google Play" width={140} height={60} />
        </a>
      )}
    </div>
  </div>
);

const OurGames = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-16">OUR GAMES</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted gap and added more columns for larger screens */}
          {games.map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurGames;