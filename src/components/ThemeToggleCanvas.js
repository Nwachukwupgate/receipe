'use client'


import { useEffect, useRef } from 'react';
import { useSnapshot } from 'valtio';
import themeState from '@/store';

const ThemeToggleCanvas = () => {
  const canvasRef = useRef(null);
  const snap = useSnapshot(themeState);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const draw = () => {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      if (snap.darkMode) {
        // Draw dark mode design
        context.fillStyle = 'black';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = 'white';
        context.font = '20px Arial';
        context.fillText('Dark Mode', 10, 30);
      } else {
        // Draw light mode design
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = 'black';
        context.font = '20px Arial';
        context.fillText('Light Mode', 10, 30);
      }
    };

    draw();
  }, [snap.darkMode]);

  const toggleTheme = () => {
    themeState.darkMode = !themeState.darkMode;
    if (themeState.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="150"
        height="50"
        className="border border-gray-300 dark:border-gray-700"
        onClick={toggleTheme}
      />
    </div>
  );
};

export default ThemeToggleCanvas;
