// Hoks
import { useTranslation } from 'react-i18next';

// Content
import { posts } from '@content';

// Components
import { PostCard } from '@/components/post-card';

// Utils
import { formatDate } from '@/lib/utils';

// Types
import { type Locale } from '@/types';

export function BlogPage() {
  const { t, i18n } = useTranslation('pages');
  const locale = (i18n.language as Locale) || 'en';

  const filteredPosts = posts.filter((post) => post.locale === locale);

  if (filteredPosts.length === 0) {
    return <p>No hay posts para el idioma actual</p>;
  }

  return (
    <section className="space-y-6">
      <h1 className="text-xl font-extrabold">{t('blog.title')}</h1>
      {filteredPosts.map((item) => (
        <PostCard
          key={item.slug}
          title={item.title}
          description={item.description}
          slug={`/${item.slug}`}
          date={formatDate(item.date, locale)}
          tags={item.tags}
        />
      ))}
    </section>
  );
}
