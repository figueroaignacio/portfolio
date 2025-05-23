// Components
import { Badge } from './badge';

// Types
import { type Education } from '@/types';

export function EducationCard({ date, description, place, tags, title }: Education) {
  return (
    <div className="border-primary bg-card space-y-5 rounded-md border-t-8 px-4 py-4 shadow-sm dark:shadow-lg">
      <header className="space-y-3">
        <div className="flex flex-wrap-reverse justify-between gap-y-3">
          <div className="space-y-1">
            <h3 className="text-lg font-bold">{title}</h3>
            <h4 className="text-sm">{place}</h4>
          </div>
          <span className="text-muted-foreground text-xs">{date}</span>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
      </header>
      <div className="flex flex-wrap gap-2">
        {tags.map((item, index) => (
          <Badge variant="badge-primary" key={index}>
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}
