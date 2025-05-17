// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { Link } from 'react-router';

export function Hero() {
  const { t } = useTranslation('sections');

  return (
    <section className="space-y-5">
      <div>
        <h1 className="text-xl font-extrabold">{t('hero.title')}</h1>
        <h2>{t('hero.subtitle')}</h2>
      </div>
      <p className="text-muted-foreground">{t('hero.description')}</p>

      <Link to="/blog" className="btn-outline">
        {t('hero.cta.readMyBlog')}
      </Link>
    </section>
  );
}
