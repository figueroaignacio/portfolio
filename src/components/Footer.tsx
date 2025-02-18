// Hooks
import { useTranslation } from "react-i18next";

// Icons
import { Location } from "@/components/Icons.tsx";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background  border-t border-border mt-12">
      <div className="max-w-screen-xl mx-auto space-y-6">
        <div className="container py-12 space-y-4">
          <h2 className="text-2xl font-semibold">Ignacio Figueroa</h2>
          <div className="flex items-center gap-x-1 text-sm">
            <Location />
            <p>Buenos Aires, Monte Grande B1842, Argentina</p>
          </div>
          <p className="text-sm max-w-xl text-muted-foreground leading-6">
            {t("components.footer.description")}
          </p>
          <div className="text-sm">
            © {currentYear} Ignacio Figueroa. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
