import { useTranslation } from 'react-i18next';

export function Intro() {
  const { t } = useTranslation('sections');

  const texts = [
    {
      text: t('about.greeting'),
    },
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
    <div className="space-y-5 text-sm">
      {texts.map((item, index) => (
        <p key={index}>{item.text}</p>
      ))}
    </div>
  );
}
