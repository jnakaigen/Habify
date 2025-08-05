import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Load theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  // ✅ NEW: Load density from localStorage or default to 'default'
  const [density, setDensity] = useState(() => localStorage.getItem('density') || 'default');
const [accent, setAccent] = useState(() => localStorage.getItem('accent') || 'green'); // ✅ new state

  // Save theme change
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // ✅ Save density change
  useEffect(() => {
    localStorage.setItem('density', density);
  }, [density]);

 useEffect(() => {
    localStorage.setItem('accent', accent);
    document.documentElement.style.setProperty('--accent-color', accent === 'green' ? '#0B7557' : '#6A5ACD');
  }, [accent]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, density, setDensity,accent, setAccent}}>
      {children}
    </ThemeContext.Provider>
  );
};
