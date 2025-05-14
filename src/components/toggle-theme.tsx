// Hooks
import { useTheme } from '../hooks/use-theme';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return <button onClick={handleTheme}>{theme === 'light' ? <MoonIcon /> : <SunIcon />}</button>;
}
