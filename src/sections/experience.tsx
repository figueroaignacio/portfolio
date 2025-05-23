// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { ExperienceItem } from '@/components/experience-item';

// Types
import type { Experience } from '@/types';

export function Experience() {
  const { t } = useTranslation('sections');
  const experiences = t('experience.items', { returnObjects: true }) as Experience[];

  return (
    <div className="space-y-5">
      <h2 className="font-bold">{t('experience.title')}</h2>
      <ul>
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.place}
            role={experience.role}
            description={experience.description}
            type={experience.type}
            time={experience.time}
            place={experience.place}
            workitems={experience.workitems}
            impact={experience.impact}
            tags={experience.tags}
          />
        ))}
      </ul>
    </div>
  );
}
