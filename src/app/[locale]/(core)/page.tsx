import { use } from 'react';

// Next intl
import { Locale } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

// Components

type HomePageProps = {
  params: Promise<{ locale: Locale }>;
};

export default function HomePage({ params }: HomePageProps) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return <div></div>;
}
