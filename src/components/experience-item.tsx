// Components
import { Badge } from './badge';

// Types
import type { Experience } from '@/types';

export function ExperienceItem({
  description,
  impact,
  place,
  role,
  tags,
  time,
  type,
  workitems,
}: Experience) {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <div className="flex flex-wrap-reverse items-center justify-between gap-y-1 sm:gap-y-2">
          <h3 className="text-base font-semibold">{role}</h3>
          <Badge variant="badge-secondary">{type}</Badge>
        </div>
        <div className="flex flex-wrap items-center gap-x-2 text-sm">
          <span>{place}</span>
          <span className="hidden sm:inline">|</span>
          <span>{time}</span>
        </div>
        <p className="text-sm">{description}</p>
      </div>
      <p className="text-muted-foreground text-sm">{impact}</p>
      <ul className="list-inside list-disc space-y-1 pl-1">
        {workitems.map((item, i) => (
          <li key={i} className="text-sm leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="badge-primary">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
