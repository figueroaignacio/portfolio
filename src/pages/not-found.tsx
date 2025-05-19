// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { Link } from 'react-router';

export function NotFoundPage() {
  const { t } = useTranslation('pages');

  return (
    <section className="flex min-h-[70dvh] flex-col items-center justify-center space-y-6 px-4 text-center">
      <div className="text-6xl">👾</div>
      <h1 className="text-3xl font-bold">{t('notFound.title')}</h1>
      <p className="text-muted-foreground max-w-md">{t('notFound.description')}</p>
      <Link
        to="/"
        className="border-border bg-background hover:bg-accent inline-block rounded-xl border px-4 py-2 text-sm font-medium transition-colors"
      >
        {t('notFound.goHome')}
      </Link>
    </section>
  );
}
