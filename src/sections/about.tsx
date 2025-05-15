import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation('sections');

  const paragraphs = [
    {
      text: t('about.intro'),
    },
    {
      text: t('about.journey'),
    },
    {
      text: t('about.education'),
    },
    {
      text: t('about.project'),
    },
  ];

  return (
    <section className="min-h-[80dvh] space-y-6">
      <h2>{t('about.title')}</h2>
      {paragraphs.map((item) => (
        <p className="text-muted-foreground">{item.text}</p>
      ))}
    </section>
  );
}
