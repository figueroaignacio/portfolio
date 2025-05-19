// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { Metadata } from '@/components/metadata';

export function AboutPage() {
  const { t } = useTranslation(['pages', 'siteConfig']);

  return (
    <div>
      <Metadata
        title={t('aboutMetadata.title', { ns: 'siteConfig' })}
        description={t('aboutMetadata.description', { ns: 'siteConfig' })}
        keywords={t('aboutMetadata.keywords', { ns: 'siteConfig' })}
      />
      <h1 className="text-xl font-extrabold">{t('about.title')}</h1>
    </div>
  );
}
