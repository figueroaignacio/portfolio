// Hoks
import { useTranslation } from 'react-i18next';

// Content
import { posts } from '@content';

// Components
import { Metadata } from '@/components/metadata';
import { PageHeader } from '@/components/page-header';
import { PostCard } from '@/components/post-card';

// Utils
import { filterByLocale, formatDate } from '@/lib/utils';

// Types
import { type Locale } from '@/types';

export function BlogPage() {
  const { t, i18n } = useTranslation(['pages', 'siteConfig']);
  const locale = (i18n.language as Locale) || 'en';

  const filteredPosts = filterByLocale(posts, locale);

  // if (filteredPosts.length === 0) {
  //   return <p>{t('blog.noPosts')}</p>;
  // }

  return (
    <section className="space-y-6">
      <Metadata
        title={t('blogMetadata.title', { ns: 'siteConfig' })}
        description={t('blogMetadata.description', { ns: 'siteConfig' })}
        keywords={t('blogMetadata.keywords', { ns: 'siteConfig' })}
      />
      <PageHeader title={t('blog.title')} description={t('blog.description')} />
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
