import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../Hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`
        relative p-2 rounded-full border-2 border-kovalty-gray/30 dark:border-kovalty-pink/30
        bg-white/80 dark:bg-kovalty-black/80 backdrop-blur-sm
        hover:bg-kovalty-gray/10 dark:hover:bg-kovalty-pink/10
        hover:border-kovalty-pink/50 dark:hover:border-kovalty-pink/70
        focus:outline-none focus:ring-2 focus:ring-kovalty-pink/50 focus:ring-offset-2
        dark:focus:ring-offset-kovalty-black
        transform hover:scale-110 active:scale-95
        transition-all duration-300 ease-in-out
        group
        ${className}
      `}
    >
      <div className="relative w-5 h-5 overflow-hidden">
        <Sun
          className={`
            absolute inset-0 w-5 h-5 text-kovalty-black dark:text-kovalty-gray
            transform transition-all duration-500 ease-in-out
            ${theme === 'dark' 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
            }
          `}
        />
        <Moon
          className={`
            absolute inset-0 w-5 h-5 text-kovalty-black dark:text-kovalty-gray
            transform transition-all duration-500 ease-in-out
            ${theme === 'light' 
              ? '-rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
            }
          `}
        />
      </div>
      
      {/* Pulse effect on hover */}
      <div className="absolute inset-0 rounded-full bg-kovalty-pink/20 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out" />
    </button>
  );
};