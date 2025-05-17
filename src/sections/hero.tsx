import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation('sections');

  return (
    <section>
      <h1 className="text-xl font-extrabold">{t('hero.title')}</h1>
      <h2>{t('hero.subtitle')}</h2>
      <p className="text-muted-foreground">{t('hero.description')}</p>
    </section>
  );
}
