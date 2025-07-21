// Hooks
import { useTranslations } from 'next-intl';

// Components
import { Link } from '@/i18n/navigation';
import { ChatBubbleIcon, GearIcon, PersonIcon } from '@radix-ui/react-icons';
import { ToggleTheme } from './toggle-theme';

type Navigation = {
  label: string;
  href: string;
};

const iconMap: Record<string, React.ReactNode> = {
  profile: <PersonIcon className=" size-3" />,
  projects: <GearIcon className=" size-3" />,
  blog: <ChatBubbleIcon className=" size-3" />,
};

export function Navigation() {
  const t = useTranslations('ui');
  const navigation = t.raw('navigation') as Navigation[];

  return (
    <nav className="fixed -bottom-8 sm:-bottom-6 inset-x-0 mx-auto z-50 bg-background border border-border shadow-sm px-4 py-3 flex gap-12 max-w-xl w-full sm:rounded-2xl justify-between items-center">
      <div className="flex gap-x-12 w-full justify-evenly">
        {navigation.map((item) => {
          const key = item.label.toLowerCase().replace(/\s+/g, '');
          const icon = iconMap[key];
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center transition-colors text-xs cursor-pointer select-none"
            >
              {icon}
              <span className="mt-1">{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="border-l border-border w-1 h-12"></div>
      <div className="flex justify-center items-center">
        <ToggleTheme />
      </div>
    </nav>
  );
}
