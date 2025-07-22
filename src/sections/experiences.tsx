// Components
import { ExperienceCard } from '@/components/experience-card';

// Utils
import { getExperiences } from '@/api/experience';
import { Experience } from '@/lib/definitions';
import { getLocale, getTranslations } from 'next-intl/server';

export async function Experiences() {
  const locale = await getLocale();
  const t = await getTranslations('sections');
  const allExperiences: Experience[] = await getExperiences();

  const experiences = allExperiences.filter((item) => item.locale === locale);

  if (experiences.length === 0) {
    return <p>{t('experience.empty')}</p>;
  }

  return (
    <>
      <h2 className="mb-5 underline">{t('experience.title')}</h2>
      <section>
        {experiences.map((item) => (
          <ExperienceCard
            key={item.id}
            title={item.title}
            contractType={item.contractType}
            description={item.description}
            company={item.company}
            startDate={item.startDate}
            endDate={item.endDate}
            technologies={item.technologies}
          />
        ))}
      </section>
    </>
  );
}
