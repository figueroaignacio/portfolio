// Types
import { type Post } from '@content';

// Components
import { Badge } from './badge';

type PostCardProps = Pick<Post, 'title' | 'description' | 'slug' | 'tags' | 'date'>;

export function PostCard({ title, description, date, tags, slug }: PostCardProps) {
  return (
    <div className="card">
      <div className="flex flex-wrap-reverse items-center justify-between gap-y-3">
        <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
        <h2 className="text-xl font-bold">{title}</h2>
        <span className="text-xs">{date}</span>
      </div>
      <ul className="flex flex-wrap gap-1">
        {tags?.map((tag, index) => (
          <li key={index}>
            <Badge>{tag}</Badge>
          </li>
        ))}
      </ul>
      <div className="flex">
        <a href={`${slug}`} className="btn w-full">
          Leer más
        </a>
      </div>
    </div>
  );
}
