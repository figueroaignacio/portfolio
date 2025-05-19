// Hooks
import { useTranslation } from 'react-i18next';

// Content
import { projects } from '@content';

// Components
import { ProjectCard } from '@/components/project-card';
import { Seo } from '@/components/seo';

// Types
import { type Locale } from '@/types';

// Utils
import { filterByLocale } from '@/lib/utils';

export function ProjectsPage() {
  const { t, i18n } = useTranslation(['pages', 'siteConfig']);
  const locale = (i18n.language as Locale) || 'en';

  const filteredProjects = filterByLocale(projects, locale);

  return (
    <section className="space-y-6">
      <Seo
        title={t('projectsMetadata.title', { ns: 'siteConfig' })}
        description={t('projectsMetadata.description', { ns: 'siteConfig' })}
        keywords={t('projectsMetadata.keywords', { ns: 'siteConfig' })}
      />
      <h1 className="text-xl font-extrabold">{t('projects.title')}</h1>
      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.slug}
          title={project.title}
          category={project.category}
          description={project.description}
          technologies={project.technologies}
          slug={project.slug}
          site={project.site}
        />
      ))}
    </section>
  );
}
