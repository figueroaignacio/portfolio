// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { Link } from 'react-router';

export function Hero() {
  const { t } = useTranslation('sections');

  const ctas = [
    {
      label: t('hero.cta.readMyBlog'),
      href: '/blog',
      variant: 'btn',
    },
  ];

  return (
    <section className="flex min-h-[80dvh] flex-col justify-center space-y-3">
      <span className="text-lg font-thin">{t('hero.greeting')}</span>
      <h1 className="text-2xl font-bold uppercase lg:text-4xl">Ignacio Figueroa</h1>
      <h2 className="text-sm">{t('hero.subtitle')}</h2>
      <h2 className="text-muted-foreground max-w-xl">{t('hero.description')}</h2>
      <div className="my-5 space-x-4">
        {ctas.map((item) => (
          <Link key={item.href} to={item.href} className={item.variant}>
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
