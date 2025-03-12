import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const LIGHT_THEME = "light";
const DARK_THEME = "dark";
const MEDIA = "(prefers-color-scheme: dark)";

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

const getInitialTheme = (): Theme => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    if (storedTheme === LIGHT_THEME || storedTheme === DARK_THEME) {
      return storedTheme;
    }
    if (window.matchMedia && window.matchMedia(MEDIA).matches) {
      return DARK_THEME;
    }
  }

  return LIGHT_THEME;
};

const UseIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const applyTheme = (theme: Theme) => {
  if (typeof document !== "undefined") {
    const root = document.documentElement;
    root.classList.remove(LIGHT_THEME, DARK_THEME);
    root.classList.add(theme);
  }
};

if (typeof window !== "undefined") {
  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme());

  UseIsomorphicLayoutEffect(() => {
    applyTheme(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
