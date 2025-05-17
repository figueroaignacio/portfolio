// Hoks
import { useTranslation } from 'react-i18next';

// Content
import { posts } from '@content';

// Types
import { type Locale } from '@/types';
import { Link } from 'react-router';

export function BlogPage() {
  const { i18n } = useTranslation();
  const lang = (i18n.language as Locale) || 'en';

  const filteredPosts = posts.filter((post) => post.locale === lang);

  if (filteredPosts.length === 0) {
    return <p>No hay posts para el idioma actual</p>;
  }

  return (
    <section>
      {filteredPosts.map((item) => (
        <div key={item.slug}>
          <h1>{item.title}</h1>
          <Link to={`/${item.slug}`}>Leer</Link>
        </div>
      ))}
    </section>
  );
}
