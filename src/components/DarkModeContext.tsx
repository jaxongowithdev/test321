import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface DarkModeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

interface DarkModeProviderProps {
  children: ReactNode;
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Ensure we start with light mode as default
    const savedTheme = localStorage.getItem('wedding-theme');
    
    // Clear any existing dark class first
    document.documentElement.classList.remove('dark');
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      // Default to light mode and save it to localStorage if not set
      setIsDarkMode(false);
      if (!savedTheme) {
        localStorage.setItem('wedding-theme', 'light');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => {
      const newDarkMode = !prev;
      
      if (newDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('wedding-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('wedding-theme', 'light');
      }
      
      return newDarkMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};