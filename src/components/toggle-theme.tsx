// Hooks
import { useTheme } from '@/hooks/use-theme';

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

export function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  function handleTheme() {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  return (
    <>
      <button onClick={handleTheme} className="border-border border-r pr-4">
        {theme === 'light' ? <MoonIcon className="size-4" /> : <SunIcon className="size-4" />}
      </button>
    </>
  );
}
