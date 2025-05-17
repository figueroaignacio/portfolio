// Hooks
import { useTranslation } from 'react-i18next';

// Components
import { PostCard } from '@/components/post-card';

// Types
import { type Locale } from '@/types';

// Contetn
import { posts } from '@content';

export function LatestPosts() {
  const { i18n } = useTranslation();
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
      <h2>Posts recientes</h2>
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
