// Hooks
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

// Components
import { Markdown } from '@/components/markdown';

// Content
import { posts } from '@content';

export function PostDetailsPage() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const locale = i18n.language;

  if (!slug) return <p>Slug no válido</p>;

  const post = posts.find((post) => post.slugAsParams === slug && post.locale === locale);

  if (!post) return <p>Post no encontrado</p>;

  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <Markdown code={post.body} />
    </section>
  );
}
