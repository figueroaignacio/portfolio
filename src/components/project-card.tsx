// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { FileTextIcon, OpenInNewWindowIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router';
import { Badge } from './badge';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  slug: string;
  site: string;
  category: string;
}

export function ProjectCard({
  description,
  slug,
  technologies,
  title,
  site,
  category,
}: ProjectCardProps) {
  const { t } = useTranslation('ui');

  const actions = [
    {
      label: t('projectCard.actions.details'),
      href: `/${slug}`,
      target: '',
      variant: 'btn',
      icon: FileTextIcon,
    },
    {
      label: t('projectCard.actions.site'),
      href: site,
      target: '_blank',
      variant: 'btn-outline',
      icon: OpenInNewWindowIcon,
    },
  ];

  return (
    <div className="card">
      <header className="space-y-4">
        <div className="flex flex-wrap-reverse items-center justify-between">
          <h2 className="text-xl font-bold">{title}</h2>
          <span className="border-border rounded-md border px-2 py-1 text-xs">{category}</span>
        </div>
        <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
      </header>
      <div className="flex flex-wrap gap-1">
        {technologies.map((tech) => (
          <Badge key={tech} variant="badge-primary">
            {tech}
          </Badge>
        ))}
      </div>
      <footer className="flex justify-end space-x-3">
        {actions.map((action) => (
          <Link
            key={action.href}
            to={action.href}
            className={`flex items-center gap-x-1 ${action.variant}`}
            target={action.target}
          >
            <span>{action.label}</span>
            <action.icon className="size-4" />
          </Link>
        ))}
      </footer>
    </div>
  );
}
