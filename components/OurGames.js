import React from "react";
import Image from "next/image";

const games = [
  {
    id: 1,
    title: "TimeGuess",
    description:
      "Guess the location and year of photographs. Test your geography and history knowledge!",
    icon: "/images/timeGuess.png",
    appStore:
      "https://apps.apple.com/us/app/timeguess-when-and-where/id6720755290",
    playStore:
      "https://play.google.com/store/apps/details?id=com.yonigold.WhereTaken",
    bgColor: "bg-blue-100",
    textColor: "text-blue-900",
  },
  {
    id: 2,
    title: "Brainrot Quiz",
    description:
      "Test your knowledge of internet culture, memes, and viral trends!",
    icon: "/images/brainrot.webp",
    appStore:
      "https://apps.apple.com/us/app/brainrot-quiz-ttiktok-quiz/id6572299416",
    playStore:
      "https://play.google.com/store/apps/details?id=com.yonigold.brainrotquiz",
    bgColor: "bg-purple-100",
    textColor: "text-purple-900",
  },
  {
    id: 3,
    title: "Watch Box",
    description:
      "Build your dream watch collection! Unlock rare timepieces and compete with collectors.",
    icon: "/images/watchbox.png",
    appStore:
      "https://apps.apple.com/us/app/watchbox-watch-collector-game/id6751277168",
    playStore:
      "https://play.google.com/store/apps/details?id=com.yonigold.watchtycoon",
    bgColor: "bg-amber-100",
    textColor: "text-amber-900",
  },
  {
    id: 4,
    title: "Categories",
    description:
      "Sort words into meaningful categories. Find associations and patterns!",
    icon: "/images/categories.png",
    appStore:
      "https://apps.apple.com/gb/app/categories-words-associations/id6746159736",
    playStore: null,
    bgColor: "bg-green-100",
    textColor: "text-green-900",
  },
  {
    id: 5,
    title: "Footy Games",
    description:
      "Football Bingo, connections, and trivia. Perfect for soccer fans!",
    icon: "/images/footygames.png",
    appStore:
      "https://apps.apple.com/il/app/footy-games-football-bingo/id6738302201",
    playStore: null,
    bgColor: "bg-red-100",
    textColor: "text-red-900",
  },
  {
    id: 6,
    title: "PinPoints",
    description: "Guess mystery words using just 5 clues. Over 500 fun levels!",
    icon: "/images/pinpoint.webp",
    appStore:
      "https://apps.apple.com/us/app/pinpoints-word-guessing-game/id6747709762",
    playStore: null,
    bgColor: "bg-pink-100",
    textColor: "text-pink-900",
  },
  {
    id: 7,
    title: "Combinations",
    description:
      "Form words from letter grids. 500+ handcrafted puzzles to master!",
    icon: "/images/combinations.webp",
    appStore:
      "https://apps.apple.com/us/app/combinations-word-puzzle/id6748285966",
    playStore:
      "https://play.google.com/store/apps/details?id=com.yonigold.combinations",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-900",
  },
  {
    id: 8,
    title: "PicSong",
    description: "Guess the song from pictures! Test your music knowledge.",
    icon: "/images/picsong.webp",
    appStore:
      "https://apps.apple.com/us/app/picsong-guess-the-song/id6749226662",
    playStore: null,
    bgColor: "bg-cyan-100",
    textColor: "text-cyan-900",
  },
  {
    id: 9,
    title: "Word Chains",
    description:
      "Find associations between words. Group related words into meaningful chains!",
    icon: "/images/brainrot.webp",
    appStore:
      "https://apps.apple.com/il/app/word-chains-associations-game/id6738982688",
    playStore: null,
    bgColor: "bg-teal-100",
    textColor: "text-teal-900",
  },
  {
    id: 10,
    title: "Word Sort",
    description:
      "Sort. Link. Solve! Find connections and sort words by association.",
    icon: "/images/wordsort.webp",
    appStore:
      "https://apps.apple.com/us/app/word-sort-association-puzzle/id6752808446",
    playStore: null,
    bgColor: "bg-orange-100",
    textColor: "text-orange-900",
  },
  {
    id: 11,
    title: "Jigsolitaire",
    description:
      "Word Jigsolitaire Card Game. Unique blend of puzzles and card games!",
    icon: "/images/jigso.webp",
    appStore:
      "https://apps.apple.com/us/app/jigsolitaire-associations/id6755244693",
    playStore: null,
    bgColor: "bg-violet-100",
    textColor: "text-violet-900",
  },
  {
    id: 12,
    title: "Football Grids",
    description:
      "Test your football knowledge! Daily grid challenges for soccer fans.",

    icon: "/images/footballgrids.webp",
    appStore:
      "https://apps.apple.com/us/app/football-grids-daily-games/id6755445283",
    playStore: null,
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-900",
  },
];

const GameCard = ({ game }) => (
  <div
    className={`game-card group ${game.bgColor} p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 scroll-fade-in`}
  >
    <div className="flex flex-col items-center space-y-4">
      {/* Game icon - square */}
      <div className="relative transform transition-transform duration-300 group-hover:scale-110">
        <div className="w-28 h-28 rounded-2xl bg-white p-2 shadow-lg">
          <Image
            src={game.icon}
            alt={game.title}
            width={112}
            height={112}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Game title */}
      <h3 className={`text-2xl font-bold text-center ${game.textColor}`}>
        {game.title}
      </h3>

      {/* Game description */}
      <p
        className={`text-center ${game.textColor} opacity-80 text-sm leading-relaxed min-h-[3rem]`}
      >
        {game.description}
      </p>

      {/* Download buttons */}
      <div className="flex flex-col gap-3 w-full pt-4">
        {game.appStore && (
          <a
            href={game.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl transition-all duration-200 text-center shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Download Now!
          </a>
        )}
        {game.playStore && (
          <a
            href={game.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold py-2 px-6 rounded-xl transition-all duration-200 text-center text-sm"
          >
            Google Play
          </a>
        )}
      </div>
    </div>
  </div>
);

const OurGames = () => {
  return (
    <div id="games" className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 scroll-fade-in">
            Our Games
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto rounded-full mb-4"></div>
          <p className="text-center text-slate-600 text-lg scroll-fade-in">
            Download and play our exciting word games and puzzles
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurGames;
