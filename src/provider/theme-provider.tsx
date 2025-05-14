import { type Theme, type ThemeProviderState, ThemeProviderContext } from '@/context/theme-context';
import React, { useLayoutEffect, useState } from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'vite-ui-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useLayoutEffect(() => {
    const root = document.documentElement;
    let resolvedTheme: Theme = defaultTheme;

    const saved = localStorage.getItem(storageKey) as Theme | null;
    if (saved && saved !== 'system') {
      resolvedTheme = saved;
    } else if (saved === 'system' || !saved) {
      resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    root.classList.remove('light', 'dark');
    root.classList.add(resolvedTheme);
    setTheme(resolvedTheme);
  }, [defaultTheme, storageKey]);

  const value: ThemeProviderState = {
    theme: theme || defaultTheme,
    setTheme: (newTheme: Theme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  if (!theme) return null;

  return (
    <ThemeProviderContext {...props} value={value}>
      {children}
    </ThemeProviderContext>
  );
}
