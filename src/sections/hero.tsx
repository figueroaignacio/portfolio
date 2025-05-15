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
    {
      label: t('hero.cta.knowMe'),
      href: '#about',
      variant: 'btn-outline',
    },
  ];

  return (
    <section className="flex min-h-[80dvh] flex-col items-center justify-center">
      <span className="text-lg font-thin">{t('hero.greeting')}</span>
      <h1 className="text-2xl font-bold lg:text-4xl">Ignacio Figueroa</h1>
      <p className="text-muted-foreground text-sm">{t('hero.description')}</p>
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
