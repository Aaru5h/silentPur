import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import GamesPage from './components/GamesPage';
import AboutPage from './components/AboutPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'games':
        return <GamesPage />;
      case 'about':
        return <AboutPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };
  
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)]">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="page-transition">
        {renderPage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
