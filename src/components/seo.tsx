interface SeoProps {
  title: string;
  description: string;
  keywords: string;
  url?: string;
  image?: string;
}

export function Seo({ description, keywords, title, image, url }: SeoProps) {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Ignacio Figueroa" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
    </>
  );
}
