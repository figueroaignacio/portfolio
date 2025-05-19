// Hooks
import { useTranslation } from 'react-i18next';

// Content
import { projects } from '@content';

// Components
import { ProjectCard } from '@/components/project-card';

// Utils
import { filterByLocale } from '@/lib/utils';

// Types
import type { Locale } from '@/types';

export function LatestProjects() {
  const { i18n } = useTranslation();
  const locale = (i18n.language as Locale) || 'en';

  const filteredProjects = filterByLocale(projects, locale);
  const mainCategory = locale === 'es' ? 'Proyectos Principales' : 'Main Projects';
  const mainProjects = filteredProjects.filter((project) => project.category === mainCategory);

  // if (mainProjects.length === 0) {
  //   return null;
  // }

  return (
    <section className="space-y-6">
      <h2 className="font-bold">{locale === 'es' ? 'Proyectos principales' : 'Main Projects'}</h2>
      <div>
        {mainProjects.map((project) => (
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
    </section>
  );
}
