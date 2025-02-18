// Hooks
import { useTheme } from "@/hooks/useTheme";

// Icons
import { MoonIcon, SunIcon } from "./Icons";

export function ToggleTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className=" rounded-md  hover:bg-primary-foreground transition-colors flex justify-center"
      aria-label={theme ? "Light" : "Dark"}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}
