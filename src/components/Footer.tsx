import React from 'react';
import { Github, Twitter, Instagram, Gamepad2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--color-card)] py-12 border-t border-[var(--color-primary)] border-opacity-30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Gamepad2 className="h-8 w-8 text-[var(--color-primary)]" />
            <span className="pixel-font text-xl text-[var(--color-primary)]">THE SILENT PURR</span>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">
              Made with ❤️ for your birthday
            </p>
            <p className="text-sm text-gray-500 mt-1">
              © {new Date().getFullYear()} The Silent Purr. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;