'use client';

import { Link, usePathname } from '@/i18n/navigation';
import { ChatBubbleIcon, GearIcon, PersonIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { ToggleTheme } from './toggle-theme';

type Navigation = {
  label: string;
  href: string;
};

const iconMap: Record<string, React.ReactNode> = {
  '/': <PersonIcon className="size-5" />,
  '/projects': <GearIcon className="size-5" />,
  '/posts': <ChatBubbleIcon className="size-5" />,
};

export function Navigation() {
  const t = useTranslations('ui');
  const pathname = usePathname();
  const navigation = t.raw('navigation') as Navigation[];

  return (
    <nav className="fixed bottom-4 inset-x-0 z-50 mx-auto max-w-xl w-full rounded-3xl bg-muted/10 border border-border backdrop-blur-md shadow-xl px-6 py-4 flex items-center justify-between">
      <div className="flex w-full items-center justify-evenly gap-4">
        {navigation.map((item) => {
          const icon = iconMap[item.href];
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                'flex flex-col items-center text-xs transition-all duration-200',
                isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <div
                className={clsx(
                  'p-2 rounded-full transition-colors',
                  isActive ? 'bg-accent text-accent-foreground' : 'bg-transparent',
                )}
              >
                {icon}
              </div>
              <span className="mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="ml-4 pl-4 border-l border-border h-6" />
      <div>
        <ToggleTheme />
      </div>
    </nav>
  );
}
