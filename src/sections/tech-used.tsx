import { useTranslation } from 'react-i18next';

export function TechUsed() {
  const { t } = useTranslation('sections');

  const tech = [
    {
      title: 'React',
      href: '/icons.svg#react',
    },
    {
      title: 'Vite',
      href: '/icons.svg#vite',
    },
    {
      title: 'TypeScript',
      href: '/icons.svg#typescript',
    },
    {
      title: 'Tailwind',
      href: '/icons.svg#tailwindcss',
    },
    {
      title: 'Velite',
      href: '/icons.svg#velite',
    },
    {
      title: 'Markdown',
      href: '/icons.svg#markdown',
    },
  ];

  return (
    <section className="space-y-5">
      <h2 className="font-extrabold">{t('techUsed.title')}</h2>
      <div className="flex flex-wrap gap-x-1 gap-y-2">
        {tech.map((item, index) => (
          <div className="border-border bg-card flex gap-1 rounded-xl border px-4 py-1">
            <svg key={index} width={20} height={20}>
              <use xlinkHref={item.href} />
            </svg>
            <span className="text-sm">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
