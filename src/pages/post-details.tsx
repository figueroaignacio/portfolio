// Hooks
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

// Components
import { Markdown } from '@/components/markdown';
import { Metadata } from '@/components/metadata';
import { PostPageHeader } from '@/components/post-page-header';

// Content
import { posts } from '@content';

export function PostDetailsPage() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const locale = i18n.language;

  if (!slug) return <p>Slug no válido</p>;

  const post = posts.find((post) => post.slugAsParams === slug && post.locale === locale);
  if (!post) return <p>Post no encontrado</p>;

  const keywords = post.tags ? post.tags.join(', ') : '';

  return (
    <section>
      <Metadata title={post.title} description={post.description} keywords={keywords} />
      <PostPageHeader
        title={post.title}
        description={post.description}
        date={post.date}
        tags={post.tags}
        locale={locale}
      />
      <Markdown code={post.body} />
    </section>
  );
}
