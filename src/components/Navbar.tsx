import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2 } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
        ? 'bg-[var(--color-background)] shadow-md py-2' 
        : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2" onClick={() => handleNavigation('home')}>
            <Gamepad2 className="h-8 w-8 text-[var(--color-primary)]" />
            <span className="pixel-font text-lg md:text-xl text-[var(--color-primary)] clickable">THE SILENT PURR</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')} 
              className={`nav-link pixel-font text-sm ${currentPage === 'home' ? 'active' : ''}`}
            >
              HOME
            </button>
            <button 
              onClick={() => handleNavigation('games')} 
              className={`nav-link pixel-font text-sm ${currentPage === 'games' ? 'active' : ''}`}
            >
              GAMES
            </button>
            <button 
              onClick={() => handleNavigation('about')} 
              className={`nav-link pixel-font text-sm ${currentPage === 'about' ? 'active' : ''}`}
            >
              ABOUT
            </button>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-[var(--color-primary)]"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('home')} 
                className={`nav-link pixel-font text-sm ${currentPage === 'home' ? 'active' : ''}`}
              >
                HOME
              </button>
              <button 
                onClick={() => handleNavigation('games')} 
                className={`nav-link pixel-font text-sm ${currentPage === 'games' ? 'active' : ''}`}
              >
                GAMES
              </button>
              <button 
                onClick={() => handleNavigation('about')} 
                className={`nav-link pixel-font text-sm ${currentPage === 'about' ? 'active' : ''}`}
              >
                ABOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;