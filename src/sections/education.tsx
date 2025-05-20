// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { EducationCard } from '@/components/education-card';

// Types
import { type Education } from '@/types';

export function Education() {
  const { t } = useTranslation('sections');

  const education = t('education.items', { returnObjects: true }) as Education[];

  return (
    <div className="space-y-5">
      <h2 className="font-bold">{t('education.title')}</h2>
      <ul className="space-y-12">
        {education.map((item) => (
          <li key={item.place}>
            <EducationCard
              title={item.title}
              description={item.description}
              place={item.place}
              date={item.date}
              tags={item.tags}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
