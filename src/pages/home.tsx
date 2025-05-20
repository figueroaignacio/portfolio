// Hooks
import { useTranslation } from 'react-i18next';

// Sections
import { Contact } from '@/sections/contact';
import { Hero } from '@/sections/hero';
import { LatestPosts } from '@/sections/latest-posts';
import { LatestProjects } from '@/sections/latest-projects';

// Components
import { Metadata } from '@/components/metadata';

const sections = [Hero, LatestPosts, LatestProjects, Contact];

export function HomePage() {
  const { t } = useTranslation('siteConfig');

  return (
    <div className="space-y-24">
      <Metadata
        title={t('homeMetadata.title')}
        description={t('homeMetadata.description')}
        keywords={t('homeMetadata.keywords')}
      />
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </div>
  );
}
