// Hooks
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

// Components
import { Markdown } from '@/components/markdown';
import { Metadata } from '@/components/metadata';
import { PostPageHeader } from '@/components/post-page-header';

// Content
import { projects } from '@content';

export function ProjectDetails() {
  const { i18n } = useTranslation();
  const { slug } = useParams();
  const locale = i18n.language;

  if (!slug) return <p>Invalid</p>;

  const project = projects.find(
    (project) => project.slugAsParams === slug && project.locale === locale,
  );
  if (!project) return <p>Project not found</p>;

  const keywords = project.technologies ? project.technologies.join(', ') : '';

  return (
    <section>
      <Metadata title={project.title} description={project.description} keywords={keywords} />
      <PostPageHeader
        title={project.title}
        description={project.description}
        locale={locale}
        tags={project.technologies}
      />
      <Markdown code={project.body} />
    </section>
  );
}
