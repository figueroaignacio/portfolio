// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { Metadata } from '@/components/metadata';
import { PageHeader } from '@/components/page-header';

// Sections
import { Education } from '@/sections/education';
import { Experience } from '@/sections/experience';
import { Intro } from '@/sections/intro';
import { Skills } from '@/sections/skills';

const sections = [Intro, Experience, Education, Skills];

export function AboutPage() {
  const { t } = useTranslation(['pages', 'siteConfig']);

  return (
    <section className="space-y-16">
      <Metadata
        title={t('aboutMetadata.title', { ns: 'siteConfig' })}
        description={t('aboutMetadata.description', { ns: 'siteConfig' })}
        keywords={t('aboutMetadata.keywords', { ns: 'siteConfig' })}
      />
      <PageHeader title={t('about.title')} description={t('about.description')} />
      {sections.map((Section, index) => (
        <Section key={index} />
      ))}
    </section>
  );
}
