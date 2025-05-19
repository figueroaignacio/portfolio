// Hooks
import { useTranslation } from 'react-i18next';

// Sections
import { Contact } from '@/sections/contact';
import { Hero } from '@/sections/hero';
import { LatestPosts } from '@/sections/latest-posts';
import { LatestProjects } from '@/sections/latest-projects';
import { TechUsed } from '@/sections/tech-used';

// Components
import { Seo } from '@/components/seo';

export function HomePage() {
  const { t } = useTranslation('siteConfig');

  return (
    <>
      <Seo
        title={t('homeMetadata.title')}
        description={t('homeMetadata.description')}
        keywords={t('homeMetadata.keywords')}
      />
      <div className="space-y-24">
        <Hero />
        <LatestPosts />
        <LatestProjects />
        <Contact />
        <TechUsed />
      </div>
    </>
  );
}
