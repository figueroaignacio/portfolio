'use client';

// Hooks
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

// Components
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { Button } from './ui/button/button';

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle theme"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
