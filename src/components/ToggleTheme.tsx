import { useTheme } from "@/contexts/ThemeContext";
import { MoonIcon, SunIcon } from "./Icons";

export function ToggleTheme() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md bg-primary hover:bg-primary-foreground border border-border transition-colors flex justify-center"
      aria-label={isDarkMode ? "Light" : "Dark"}
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
