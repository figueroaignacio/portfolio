import { useEffect, useState } from "react";
import { ScrollToTopIcon } from "./Icons";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`hidden md:block fixed bottom-6 right-14 z-50 p-3 rounded-full bg-foreground text-card border-border border transition-all duration-300 hover:scale-[1.1] ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Volver al inicio"
    >
      <ScrollToTopIcon />
    </button>
  );
}
