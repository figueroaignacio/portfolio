import { useTheme } from "@/hooks/useTheme";
import { MoonIcon, SunIcon } from "./Icons";

export function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md bg-primary hover:bg-primary-foreground border border-border transition-colors flex justify-center"
      aria-label={theme ? "Light" : "Dark"}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
