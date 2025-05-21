import React, { useState, useEffect } from 'react';
import { Calendar, Gamepad, Award, Heart } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bio' | 'achievements' | 'wishlist'>('bio');
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    // Start animation after mount
    setAnimateIn(true);
    
    // Reset animation when tab changes
    setAnimateIn(false);
    const timer = setTimeout(() => {
      setAnimateIn(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, [activeTab]);
  
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Master Strategist",
      description: "Completed all strategy games at the highest difficulty level",
      date: "April 2024",
      icon: <Award className="h-6 w-6 text-[var(--color-primary)]" />
    },
    {
      id: 2,
      title: "Platinum Hunter",
      description: "Earned platinum trophies in over 40 games",
      date: "January 2024",
      icon: <Award className="h-6 w-6 text-[var(--color-primary)]" />
    },
    {
      id: 3,
      title: "Speed Demon",
      description: "Set top 10 speedrun records in 3 different games",
      date: "November 2023",
      icon: <Award className="h-6 w-6 text-[var(--color-primary)]" />
    },
    {
      id: 4,
      title: "Community Leader",
      description: "Recognized for contributions to gaming community forums",
      date: "August 2023",
      icon: <Award className="h-6 w-6 text-[var(--color-primary)]" />
    }
  ];
  
  const wishlist = [
    "Final Fantasy XVI",
    "Starfield",
    "The Legend of Zelda: Tears of the Kingdom",
    "Diablo IV",
    "Street Fighter 6",
    "Resident Evil 4 Remake",
    "Baldur's Gate 3",
    "Star Wars Jedi: Survivor"
  ];
  
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 grid-pattern">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="pixel-font text-4xl md:text-5xl text-[var(--color-primary)] mb-4">THE GAMER</h1>
          <p className="text-xl max-w-3xl mx-auto">Meet the legendary player behind the controller.</p>
        </div>
        
        {/* Tab navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[var(--color-card)] rounded-lg p-1">
            <button 
              onClick={() => setActiveTab('bio')} 
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === 'bio' 
                ? 'bg-[var(--color-primary)] text-[var(--color-background)]' 
                : 'text-[var(--color-text)]'
              }`}
            >
              Bio
            </button>
            <button 
              onClick={() => setActiveTab('achievements')} 
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === 'achievements' 
                ? 'bg-[var(--color-primary)] text-[var(--color-background)]' 
                : 'text-[var(--color-text)]'
              }`}
            >
              Achievements
            </button>
            <button 
              onClick={() => setActiveTab('wishlist')} 
              className={`px-6 py-3 rounded-md transition-all duration-300 ${
                activeTab === 'wishlist' 
                ? 'bg-[var(--color-primary)] text-[var(--color-background)]' 
                : 'text-[var(--color-text)]'
              }`}
            >
              Wishlist
            </button>
          </div>
        </div>
        
        {/* Tab content */}
        <div 
          className={`transition-all duration-500 ${
            animateIn 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-10'
          }`}
        >
          {activeTab === 'bio' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="bg-[var(--color-card)] rounded-xl overflow-hidden glowing-border">
                  <div className="h-64 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] flex items-center justify-center">
                    <Gamepad className="h-24 w-24 text-[var(--color-background)]" />
                  </div>
                  <div className="p-6">
                    <h3 className="pixel-font text-xl mb-2 text-center">GAME MASTER</h3>
                    <div className="flex items-center justify-center space-x-2 mb-4">
                      <Calendar className="h-4 w-4 text-[var(--color-primary)]" />
                      <span className="text-sm">Birthday: May 15th</span>
                    </div>
                    <div className="text-center">
                      <p className="mb-2">Gaming since 2005</p>
                      <p>Favorite genre: RPG</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="bg-[var(--color-card)] rounded-xl p-8 glowing-border h-full">
                  <h2 className="pixel-font text-2xl mb-6 text-[var(--color-primary)]">THE LEGEND</h2>
                  
                  <div className="space-y-6">
                    <p>
                      A legendary gamer known for strategic brilliance and lightning-fast reflexes. From the early days of gaming on a borrowed console to becoming a respected member of multiple gaming communities.
                    </p>
                    
                    <p>
                      Specializing in RPGs and action-adventure games, but with a diverse portfolio spanning nearly every genre. Known for completing games at 100% and uncovering even the most obscure secrets.
                    </p>
                    
                    <p>
                      When not gaming, enjoys collecting memorabilia, discussing game lore, and occasionally streaming gameplay to share knowledge with others. Always looking forward to the next big release and the new worlds to explore.
                    </p>
                    
                    <blockquote className="border-l-4 border-[var(--color-primary)] pl-4 italic">
                      "In games, as in life, it's not just about the destination, but the journey and the stories we create along the way."
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'achievements' && (
            <div className="bg-[var(--color-card)] rounded-xl p-8 glowing-border">
              <h2 className="pixel-font text-2xl mb-6 text-[var(--color-primary)]">LEGENDARY ACHIEVEMENTS</h2>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.id}
                    className="bg-[var(--color-background)] p-6 rounded-lg flex items-start space-x-4"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: animateIn ? 'fadeIn 0.5s ease-out forwards' : 'none'
                    }}
                  >
                    <div className="bg-[var(--color-card)] p-3 rounded-full">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="pixel-font text-lg mb-1 text-[var(--color-primary)]">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-2">{achievement.date}</p>
                      <p>{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button className="btn btn-outline">
                  View All Achievements
                </button>
              </div>
            </div>
          )}
          
          {activeTab === 'wishlist' && (
            <div className="bg-[var(--color-card)] rounded-xl p-8 glowing-border">
              <h2 className="pixel-font text-2xl mb-6 text-[var(--color-primary)]">GAME WISHLIST</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {wishlist.map((game, index) => (
                  <div 
                    key={index}
                    className="bg-[var(--color-background)] p-4 rounded-lg flex items-center justify-between"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: animateIn ? 'fadeIn 0.5s ease-out forwards' : 'none'
                    }}
                  >
                    <span>{game}</span>
                    <Heart className="h-5 w-5 text-[var(--color-primary)]" />
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <p className="mb-4">Know a game that should be on this list?</p>
                <button className="btn btn-primary">
                  Suggest a Game
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;