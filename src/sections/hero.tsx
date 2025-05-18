// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { ChatBubbleIcon, PersonIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router';

export function Hero() {
  const { t } = useTranslation('sections');

  const actions = [
    {
      label: t('hero.cta.readMyBlog'),
      href: '/blog',
      icon: ChatBubbleIcon,
      variant: 'btn',
    },
    {
      label: t('hero.cta.aboutMe'),
      href: '/about',
      icon: PersonIcon,
      variant: 'btn-outline',
    },
  ];

  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-xl font-extrabold">{t('hero.title')}</h1>
        <h2>{t('hero.subtitle')}</h2>
      </div>
      <p className="text-muted-foreground max-w-xl">{t('hero.description')}</p>
      <div className="flex gap-x-4">
        {actions.map((action) => (
          <Link
            to={action.href}
            className={`${action.variant} flex w-fit items-center gap-2`}
            key={action.href}
          >
            {action.label}
            <action.icon />
          </Link>
        ))}
      </div>
    </section>
  );
}
