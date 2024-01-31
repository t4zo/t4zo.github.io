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
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    setDarkTheme(localStorage.getItem('theme') === 'dark');
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
