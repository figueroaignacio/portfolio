// Hooks
import { useTranslations } from 'next-intl';

// Components
import { LocaleSwitcher } from '@/components/locale-switcher';
import { Link } from '@/i18n/navigation';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { SocialMedias } from './social-medias';

export function Hero() {
  const t = useTranslations('sections');

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">{t('hero.title')}</h1>
        <div className="flex items-center px-1">
          <LocaleSwitcher />
        </div>
      </div>
      <p className="text-sm text-muted-foreground">{t('hero.description')}</p>
      <div className="flex items-center gap-x-4">
        <SocialMedias />
        <Link
          href={t('hero.cta.href')}
          className="text-xs flex items-center gap-x-2 hover:underline"
        >
          {t('hero.cta.label')}
          <ArrowRightIcon />
        </Link>
      </div>
    </section>
  );
}
