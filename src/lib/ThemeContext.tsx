import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'minimalist' | 'editorial' | 'brutalist' | 'playful';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('minimalist');

  useEffect(() => {
    // Remove all theme classes from body
    document.body.classList.remove('theme-minimalist', 'theme-editorial', 'theme-brutalist', 'theme-playful');
    
    // Add the current theme class
    if (theme !== 'minimalist') {
      document.body.classList.add(`theme-${theme}`);
    } else {
      document.body.classList.add('theme-minimalist');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
