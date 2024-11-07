// Hooks
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container max-w-4xl space-y-6">
        <div className="container max-w-4xl mx-auto py-12 space-y-4">
          <h2 className="text-2xl font-semibold">Ignacio Figueroa</h2>
          <p className="text-sm max-w-xl text-muted-foreground leading-6">
            {t("components.footer.description")}
          </p>
          <div className="text-sm">
            © {currentYear} Ignacio Figueroa. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}