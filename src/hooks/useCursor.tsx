import { useEffect } from 'react';

const useCursor = () => {
  useEffect(() => {
    // Create cursor elements if they don't exist
    if (!document.querySelector('.cursor-butterfly')) {
      const cursorButterfly = document.createElement('div');
      cursorButterfly.className = 'cursor-butterfly';
      
      document.body.appendChild(cursorButterfly);
      
      // Mouse move event
      const moveCursor = (e: MouseEvent) => {
        const mouseY = e.clientY;
        const mouseX = e.clientX;
        
        cursorButterfly.style.transform = `translate(${mouseX}px, ${mouseY}px) rotate(${Math.sin(Date.now() / 1000) * 10}deg)`;
      };
      
      window.addEventListener('mousemove', moveCursor);
      
      // Handle cursor when mouse leaves the window
      const hideCursor = () => {
        cursorButterfly.style.opacity = '0';
      };
      
      const showCursor = () => {
        cursorButterfly.style.opacity = '1';
      };
      
      window.addEventListener('mouseout', hideCursor);
      window.addEventListener('mouseover', showCursor);
      
      // Clean up
      return () => {
        window.removeEventListener('mousemove', moveCursor);
        window.removeEventListener('mouseout', hideCursor);
        window.removeEventListener('mouseover', showCursor);
        
        if (cursorButterfly.parentNode) {
          cursorButterfly.parentNode.removeChild(cursorButterfly);
        }
      };
    }
  }, []);
};

export default useCursor;