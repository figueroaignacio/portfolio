// Components
import { EducationCard } from '@/components/education-card';

// Utils
import { getEducation } from '@/api/get-education';
import { getLocale, getTranslations } from 'next-intl/server';

// Definitions
import { type Education } from '@/lib/definitions';

export async function Education() {
  const locale = await getLocale();
  const t = await getTranslations('sections');
  const allEducations: Education[] = await getEducation();

  const educations = allEducations.filter((item) => item.locale === locale);

  return (
    <>
      <h2 className="mt-6 mb-5 underline">{t('education.title')}</h2>
      <section className="space-y-5">
        {educations.map((item) => (
          <EducationCard
            key={item.id}
            title={item.title}
            institution={item.institution}
            startDate={item.startDate}
            description={item.description}
            isCurrent={item.isCurrent}
            endDate={item.endDate || ''}
          />
        ))}
      </section>
    </>
  );
}
