import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { use } from 'react';

type HomePageProps = {
  params: Promise<{ locale: Locale }>;
};

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <div></div>;
}
