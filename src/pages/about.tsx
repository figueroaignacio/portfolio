// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { Seo } from '@/components/seo';

export function AboutPage() {
  const { t } = useTranslation(['pages', 'siteConfig']);

  return (
    <div>
      <Seo
        title={t('aboutMetadata.title', { ns: 'siteConfig' })}
        description={t('aboutMetadata.description', { ns: 'siteConfig' })}
        keywords={t('aboutMetadata.keywords', { ns: 'siteConfig' })}
      />
      <h1 className="text-xl font-extrabold">{t('about.title')}</h1>
    </div>
  );
}
