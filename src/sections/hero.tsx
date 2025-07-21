// Hooks
import { useTranslations } from 'next-intl';

// Components
import { LocaleSwitcher } from '@/components/locale-switcher';
import { ToggleTheme } from '@/components/toggle-theme';
import { SocialMedias } from './social-medias';

export function Hero() {
  const t = useTranslations('sections');

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl">{t('hero.title')}</h1>
        <div className="flex items-center px-1">
          <LocaleSwitcher />
          <ToggleTheme />
        </div>
      </div>
      <p className="text-sm">{t('hero.description')}</p>
      <SocialMedias />
    </section>
  );
}
