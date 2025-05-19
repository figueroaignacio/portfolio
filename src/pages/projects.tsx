// Hooks
import { useTranslation } from 'react-i18next';

// Content
import { projects } from '@content';

// Components
import { ProjectCard } from '@/components/project-card';
import { Seo } from '@/components/seo';

// Utils
import { filterByLocale } from '@/lib/utils'; // o donde tengas la función

// Types
import type { Locale } from '@/types';

export function ProjectsPage() {
  const { t, i18n } = useTranslation(['pages', 'siteConfig']);
  const locale = (i18n.language as Locale) || 'en';

  const filteredProjects = filterByLocale(projects, locale);

  const projectsByCategory = filteredProjects.reduce<Record<string, typeof projects>>(
    (acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    },
    {},
  );

  // if (filteredProjects.length === 0) {
  //   return <p>{t('projects.noProjects')}</p>;
  // }

  return (
    <section className="space-y-10">
      <Seo
        title={t('projectsMetadata.title', { ns: 'siteConfig' })}
        description={t('projectsMetadata.description', { ns: 'siteConfig' })}
        keywords={t('projectsMetadata.keywords', { ns: 'siteConfig' })}
      />
      <h1 className="text-xl font-extrabold">{t('projects.title')}</h1>

      {Object.entries(projectsByCategory).map(([category, projects]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-lg font-bold">{category}</h2>
          <div>
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                slug={project.slug}
                technologies={project.technologies}
                site={project.site}
                category={project.category}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
