import { createContext, ReactNode, useEffect, useState } from 'react';

type Props = {
  children: ReactNode;
}

type IThemeContext = {
  darkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  darkTheme: null,
  toggleTheme: null,
});

export function ThemeContextProvider({ children }: Props) {
  const [darkTheme, setDarkTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkTheme(savedTheme === 'dark');
    } else {
      // Define dark mode como padrão
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkTheme(true);
    }
  }, []);

  function toggleTheme() {
    if (darkTheme) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkTheme(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkTheme(true);
    }
  }

  return <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeContext;
