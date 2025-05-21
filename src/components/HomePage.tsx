import React, { useState, useEffect } from 'react';
import { ArrowRight, Cake, Gift, Gamepad } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [loading, setLoading] = useState(true);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      setAnimationStarted(true);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[var(--color-background)]">
        <div className="pixel-font text-[var(--color-primary)] text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative grid-pattern">
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[var(--color-background)] opacity-80 z-0"></div>
          
          {/* Animated particles */}
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute bg-[var(--color-primary)] rounded-full opacity-30"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `fadeIn ${Math.random() * 4 + 2}s infinite alternate ${Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center">
          <div 
            className={`transition-all duration-1000 ${
              animationStarted 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-20'
            }`}
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Cake className="h-12 w-12 text-[var(--color-primary)]" />
              <h1 className="pixel-font text-4xl md:text-6xl lg:text-7xl text-[var(--color-primary)] hero-text">
                HAPPY BIRTHDAY!
              </h1>
              <Cake className="h-12 w-12 text-[var(--color-primary)]" />
            </div>
            <h2 className="pixel-font text-2xl md:text-3xl text-[var(--color-accent)] mb-4">
              THE SILENT PURR
            </h2>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-300 ${
              animationStarted 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-20'
            }`}
          >
            <p className="text-xl md:text-2xl mb-8 text-[var(--color-text)] max-w-2xl mx-auto">
              Level up! Today marks another year of epic gaming adventures!
            </p>
          </div>
          
          <div 
            className={`transition-all duration-1000 delay-500 ${
              animationStarted 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-20'
            }`}
          >
            <button 
              onClick={() => onNavigate('games')}
              className="btn btn-primary flex items-center mx-auto space-x-2"
            >
              <span>View Gaming Legacy</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div 
          className={`absolute bottom-10 left-0 right-0 text-center transition-all duration-1000 delay-700 ${
            animationStarted 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-20'
          }`}
        >
          <p className="pixel-font text-[var(--color-text)] text-sm animate-bounce">
            PRESS START TO CONTINUE
          </p>
        </div>
      </div>
      
      {/* Birthday Celebration Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="pixel-font text-3xl md:text-4xl text-[var(--color-primary)] mb-6">BIRTHDAY QUEST UNLOCKED!</h2>
          <p className="text-xl max-w-3xl mx-auto">Today we celebrate our legendary gamer leveling up in real life! Get ready for an epic celebration!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="game-card bg-[var(--color-card)] p-6 rounded-xl glowing-border flex flex-col items-center text-center">
            <div className="mb-4 bg-[var(--color-primary)] rounded-full p-4">
              <Gift className="h-10 w-10 text-[var(--color-background)]" />
            </div>
            <h3 className="pixel-font text-xl mb-2">ACHIEVEMENT UNLOCKED</h3>
            <p>Another year of epic gaming moments and unforgettable victories!</p>
          </div>
          
          <div className="game-card bg-[var(--color-card)] p-6 rounded-xl glowing-border flex flex-col items-center text-center">
            <div className="mb-4 bg-[var(--color-primary)] rounded-full p-4">
              <Gamepad className="h-10 w-10 text-[var(--color-background)]" />
            </div>
            <h3 className="pixel-font text-xl mb-2">LEVEL UP!</h3>
            <p>Gained +1 year of experience! New quests and adventures await!</p>
          </div>
          
          <div className="game-card bg-[var(--color-card)] p-6 rounded-xl glowing-border flex flex-col items-center text-center">
            <div className="mb-4 bg-[var(--color-primary)] rounded-full p-4">
              <Cake className="h-10 w-10 text-[var(--color-background)]" />
            </div>
            <h3 className="pixel-font text-xl mb-2">CELEBRATION TIME</h3>
            <p>Time to party! Grab your controller and let's make this day legendary!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;