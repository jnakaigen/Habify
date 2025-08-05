import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';

export default function Layout({ children }) {
  const { theme, density } = useContext(ThemeContext);

  const themeClasses = theme === 'light'
    ? 'bg-[#FAFAFC] text-[#1F1F2E]'
    : 'bg-[#1F1F2E] text-[#FAFAFC]';

  const paddingClasses = density === 'default' ? 'p-8' : 'p-4';

  return (
    <div className={`min-h-screen font-sans ${themeClasses} ${paddingClasses}`}>
      {children}
    </div>
  );
}