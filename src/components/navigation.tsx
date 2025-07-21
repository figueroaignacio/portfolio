// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';

type Navigation = {
  label: string;
  href: string;
};

export function Navigation() {
  const t = useTranslations('ui');
  const navigation = t.raw('navigation') as Navigation[];

  return (
    <nav className="border-b border-border pb-4">
      <ul className="flex gap-x-12">
        {navigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-muted-foreground text-sm hover:text-foreground">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
