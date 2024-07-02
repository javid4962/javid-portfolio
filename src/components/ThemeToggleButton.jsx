import React, { useState, useEffect } from 'react';
import { WiMoonAltFirstQuarter } from "react-icons/wi";

const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    
   
        <WiMoonAltFirstQuarter className='p-1 text-4xl text-white bg-black dark:bg-white rounded-full fixed top-5 right-5 cursor-pointer  dark:text-black dark:border-white'    onClick={toggleTheme}/>
      
    
    
  );
};

export default ThemeToggleButton;
