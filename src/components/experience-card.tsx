// Definitions
import { Experience } from '@/lib/definitions';

// Components
import { Fragment } from 'react';

// Utils
import { formatDate } from '@/lib/utils';

export function ExperienceCard({
  title,
  company,
  description,
  contractType,
  technologies,
  startDate,
  endDate,
}: Partial<Experience>) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between flex-wrap">
        <div>
          <h2>{title}</h2>
          <span className="text-sm">{contractType}</span>
        </div>
        <span className="text-xs">
          {startDate && formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Present'}
        </span>
      </div>
      <h3>{company}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
      <ul className="flex gap-x-3 gap-y-1 flex-wrap">
        {technologies?.map((technology) => (
          <Fragment key={technology.id}>
            <li className="text-xs flex items-center border border-border px-3 py-0.5 rounded-full">
              {technology.name}
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
