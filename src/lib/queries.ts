export const QUERY = {
  NOTE: (locale: string) => `
    *[_type == "note" && locale == "${locale}"] | order(publishedAt desc) {
      title,
      description,
      slug,
      body,
      publishedAt,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }
  `,
  NOTE_DETAILS: (slug: string, locale: string) => `
    *[_type == "note" && slug.current == "${slug}" && locale == "${locale}"][0] {
      title,
      description,
      body,
      publishedAt,
      mainImage {
        asset -> {
          url
        },
        alt,
      }
    }
  `,
};
