// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { TechUsed } from '@/sections/tech-used';
import { Link } from 'react-router';

interface FooterNavigationProps {
  label: string;
  href: string;
}

export function Footer() {
  const { t } = useTranslation('sections');
  const navigation = t('footer.navigation.items', {
    returnObjects: true,
  }) as FooterNavigationProps[];

  return (
    <footer className="border-border bg-background border-t py-12">
      <div className="container space-y-6">
        <section>
          <h2 className="text-xl font-bold">Ignacio Figueroa </h2>
          <p className="text-muted-foreground">Fullstack Developer</p>
        </section>
        <nav>
          <h2 className="font-semibold">{t('footer.navigation.title')}</h2>
          <div className="text-muted-foreground mt-2 flex flex-col gap-y-2">
            {navigation.map((item) => (
              <Link
                to={item.href}
                key={item.href}
                className="hover:text-primary w-fit hover:underline"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
        <TechUsed />
      </div>
    </footer>
  );
}
