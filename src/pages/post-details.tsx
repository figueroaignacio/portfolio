// Hooks
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

// Components
import { Markdown } from '@/components/markdown';

// Content
import { posts } from '@content';

// Styles
import '@/styles/markdown.css';

// Icons
import { CalendarIcon } from '@radix-ui/react-icons';

export function PostDetailsPage() {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const locale = i18n.language;

  if (!slug) return <p>Slug no válido</p>;

  const post = posts.find((post) => post.slugAsParams === slug && post.locale === locale);

  if (!post) return <p>Post no encontrado</p>;

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <section>
      <header className="mb-8">
        <h1 className="mb-4 text-3xl font-extrabold lg:text-4xl">{post.title}</h1>
        <p className="text-muted-foreground mb-6 text-lg">{post.description}</p>

        <div className="post-meta">
          {formattedDate && (
            <div className="post-date">
              <CalendarIcon className="size-5" />
              {formattedDate}
            </div>
          )}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="post-tag">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose">
        <Markdown code={post.body} />
      </article>
    </section>
  );
}
