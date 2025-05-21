import React, { useState, useEffect } from 'react';
import { Star, Heart, Trophy, Clock } from 'lucide-react';

const GAME_DATA = [
  {
    id: 1,
    title: "Elden Ring",
    genre: "Action RPG",
    image: "https://images.pexels.com/photos/7919/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.8,
    description: "An action RPG written by George R.R. Martin and developed by FromSoftware.",
    achievements: 32,
    playTime: "120+ hours"
  },
  {
    id: 2,
    title: "God of War Ragnarök",
    genre: "Action-Adventure",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.9,
    description: "Continuation of Kratos and Atreus's journey through the nine realms of Norse mythology.",
    achievements: 45,
    playTime: "80+ hours"
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    genre: "Action-Adventure",
    image: "https://images.pexels.com/photos/33041/antelope-canyon-lower-canyon-arizona.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.7,
    description: "Epic tale of outlaw Arthur Morgan and the Van der Linde gang in America, 1899.",
    achievements: 51,
    playTime: "150+ hours"
  },
  {
    id: 4,
    title: "The Witcher 3",
    genre: "Action RPG",
    image: "https://images.pexels.com/photos/1980720/pexels-photo-1980720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.9,
    description: "Geralt of Rivia's quest to find his adopted daughter while fighting monsters and politics.",
    achievements: 78,
    playTime: "200+ hours"
  },
  {
    id: 5,
    title: "Cyberpunk 2077",
    genre: "Action RPG",
    image: "https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.0,
    description: "An open-world action-adventure set in the megalopolis of Night City.",
    achievements: 44,
    playTime: "100+ hours"
  },
  {
    id: 6,
    title: "Horizon Forbidden West",
    genre: "Action RPG",
    image: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    rating: 4.6,
    description: "Aloy's journey through a post-apocalyptic western United States to find the source of a mysterious plague.",
    achievements: 53,
    playTime: "90+ hours"
  }
];

const GamesPage: React.FC = () => {
  const [activeGame, setActiveGame] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [animatedItems, setAnimatedItems] = useState<number[]>([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // Animate items one by one
      const interval = setInterval(() => {
        setAnimatedItems(prev => {
          if (prev.length >= GAME_DATA.length) {
            clearInterval(interval);
            return prev;
          }
          return [...prev, prev.length];
        });
      }, 150);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="pixel-font text-[var(--color-primary)] text-xl">Loading Games...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 pb-16 px-4 md:px-8 grid-pattern">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="pixel-font text-4xl md:text-5xl text-[var(--color-primary)] mb-4">FAVORITE GAMES</h1>
          <p className="text-xl max-w-3xl mx-auto">The epic adventures and legendary titles that have shaped the gaming experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAME_DATA.map((game, index) => (
            <div 
              key={game.id}
              className={`game-card bg-[var(--color-card)] rounded-xl overflow-hidden transition-all duration-500 ${
                animatedItems.includes(index) ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-[var(--color-background)] bg-opacity-80 p-2 m-2 rounded-lg">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-[var(--color-primary)]" />
                    <span className="text-sm">{game.rating}/5</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="pixel-font text-xl mb-2 text-[var(--color-primary)]">{game.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{game.genre}</p>
                <p className="mb-4">{game.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-1 text-sm">
                    <Trophy className="h-4 w-4 text-[var(--color-secondary)]" />
                    <span>{game.achievements} achievements</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm">
                    <Clock className="h-4 w-4 text-[var(--color-accent)]" />
                    <span>{game.playTime}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setActiveGame(activeGame === game.id ? null : game.id)}
                  className={`mt-4 w-full btn ${
                    activeGame === game.id ? 'btn-primary' : 'btn-outline'
                  }`}
                >
                  {activeGame === game.id ? 'Favorite!' : 'Add to Favorites'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="pixel-font text-3xl text-[var(--color-primary)] mb-6">GAMING STATS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-[var(--color-card)] p-6 rounded-xl glowing-border">
              <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">1250+</div>
              <div className="pixel-font text-sm">GAMES PLAYED</div>
            </div>
            
            <div className="bg-[var(--color-card)] p-6 rounded-xl glowing-border">
              <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">42</div>
              <div className="pixel-font text-sm">PLATINUMS</div>
            </div>
            
            <div className="bg-[var(--color-card)] p-6 rounded-xl glowing-border">
              <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">10K+</div>
              <div className="pixel-font text-sm">HOURS PLAYED</div>
            </div>
            
            <div className="bg-[var(--color-card)] p-6 rounded-xl glowing-border">
              <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">95%</div>
              <div className="pixel-font text-sm">COMPLETION RATE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesPage;