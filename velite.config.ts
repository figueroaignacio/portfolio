import rehypePrettyCode from 'rehype-pretty-code';
import { defineCollection, defineConfig, s } from 'velite';

const computedFields = <T extends { slug: string; locale: 'es' | 'en' }>(data: T) => {
  const slugParts = data.slug.split('/');
  const cleanedSlug = slugParts.filter((part) => part !== 'en' && part !== 'es').join('/');
  return {
    ...data,
    slug: cleanedSlug,
    slugAsParams: cleanedSlug.split('/').slice(1).join('/'),
    localeSlug: `${data.locale}/${cleanedSlug.split('/').slice(1).join('/')}`,
  };
};

export const posts = defineCollection({
  name: 'Post',
  pattern: 'posts/**/*.md',
  schema: s
    .object({
      slug: s.path(),
      title: s.string(),
      description: s.string(),
      published: s.boolean().default(false),
      body: s.markdown(),
      locale: s.enum(['es', 'en']),
    })
    .transform(computedFields),
});

export const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/**/*.md',
  schema: s
    .object({
      slug: s.path(),
      title: s.string(),
      description: s.string(),
      published: s.boolean().default(false),
      body: s.markdown(),
      source: s.string(),
      site: s.string(),
      locale: s.enum(['es', 'en']),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: './src/content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts, projects },
  markdown: { rehypePlugins: [rehypePrettyCode] },
});
