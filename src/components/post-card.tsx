// Hooks
import { useTranslation } from 'react-i18next';

// Types
import { type Post } from '@content';

// Components
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router';
import { Badge } from './badge';

type PostCardProps = Pick<Post, 'title' | 'description' | 'slug' | 'tags' | 'date'>;

export function PostCard({ title, description, date, tags, slug }: PostCardProps) {
  const { t } = useTranslation('ui');

  return (
    <article className="card">
      <header className="flex flex-wrap-reverse items-center justify-between gap-y-3">
        <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-xs">{date}</span>
      </header>
      <ul className="flex flex-wrap gap-1">
        {tags?.map((tag, index) => (
          <li key={index}>
            <Badge>{tag}</Badge>
          </li>
        ))}
      </ul>
      <footer className="flex">
        <Link to={`${slug}`} className="btn flex w-full items-center justify-center gap-x-3">
          <span>{t('postCard.actions.readMore')}</span>
          <ArrowRightIcon className="size-4" />
        </Link>
      </footer>
    </article>
  );
}
