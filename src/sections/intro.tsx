import { useTranslation } from 'react-i18next';

export function Intro() {
  const { t } = useTranslation('sections');

  const texts = [
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
    <div className="border-primary space-y-5 rounded-md text-sm shadow-md md:border-l-8 md:p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Intro 👋🏽</h2>
        <img
          src="https://github.com/figueroaignacio.png"
          alt="Avatar"
          className="size-10 rounded-full"
        />
      </div>
      {texts.map((item, index) => (
        <p key={index} className="text-muted-foreground">
          {item.text}
        </p>
      ))}
    </div>
  );
}
