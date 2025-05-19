// Components
import { CalendarIcon } from '@radix-ui/react-icons';

// Utils
import { formatDate } from '@/lib/utils';

interface PostPageHeaderProps {
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  locale: string;
}

export function PostPageHeader({ title, description, date, tags, locale }: PostPageHeaderProps) {
  const formattedDate = date ? formatDate(date, locale) : null;

  return (
    <header className="mb-8">
      <h1 className="mb-4 text-3xl font-extrabold lg:text-4xl">{title}</h1>
      <p className="text-muted-foreground mb-6 text-lg">{description}</p>
      <div className="post-meta">
        {formattedDate && (
          <div className="post-date">
            <CalendarIcon className="size-5" />
            {formattedDate}
          </div>
        )}
      </div>
      {tags && tags.length > 0 && (
        <div className="post-tags">
          {tags.map((tag) => (
            <span key={tag} className="post-tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
}
