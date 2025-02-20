// Hooks
import { useTheme } from "@/hooks/useTheme";

// Icons
import { MoonIcon, SunIcon } from "./Icons";

export function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="hover:bg-primary-foreground justify-center px-3 py-2.5 rounded-md transition-colors duration-200 flex flex-col md:flex-row items-center hover:backdrop-brightness-125 hover:bg-slate-200 dark:hover:bg-gray-600/15"
      aria-label={theme ? "Light" : "Dark"}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
