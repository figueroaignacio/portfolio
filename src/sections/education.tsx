import { getTranslations } from 'next-intl/server';

export async function Education() {
  const t = await getTranslations('sections');

  return (
    <>
      <h2 className="mt-6 mb-5 underline">{t('education.title')}</h2>
    </>
  );
}
