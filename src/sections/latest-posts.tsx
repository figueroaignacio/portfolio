// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { PostCard } from '@/components/post-card';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { Link } from 'react-router';

// Types
import { type Locale } from '@/types';

// Contetn
import { posts } from '@content';

export function LatestPosts() {
  const { t, i18n } = useTranslation('sections');
  const locale = (i18n.language as Locale) || 'en';

  const filteredPosts = posts.filter((post) => post.locale === locale);
  const sortedPosts = filteredPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  const latestTwoPosts = sortedPosts.slice(0, 2);
  if (latestTwoPosts.length === 0) {
    return <p>No hay posts para el idioma actual</p>;
  }

  return (
    <section>
      <div className="flex flex-wrap items-center justify-between gap-y-4">
        <h2 className="font-extrabold">{t('latestPosts.title')}</h2>
        <Link to="/blog" className="hover:text-primary flex items-center gap-2 text-xs underline">
          <span>{t('latestPosts.cta')}</span>
          <ArrowRightIcon className="size-3" />
        </Link>
      </div>
      <div className="mt-5 space-y-5">
        {latestTwoPosts.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            description={post.description}
            date={post.date}
            tags={post.tags}
          />
        ))}
      </div>
    </section>
  );
}
