// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { Seo } from '@/components/seo';

export function ProjectsPage() {
  const { t } = useTranslation(['pages', 'siteConfig']);

  return (
    <div>
      <Seo
        title={t('projectsMetadata.title', { ns: 'siteConfig' })}
        description={t('projectsMetadata.description', { ns: 'siteConfig' })}
        keywords={t('projectsMetadata.keywords', { ns: 'siteConfig' })}
      />
      <h1 className="text-xl font-extrabold">{t('projects.title')}</h1>
    </div>
  );
}
