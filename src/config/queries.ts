export const QUERY = {
  NOTE: `*[_type == "note"] {
    title,
    "slug": slug.current,
    body,
    description,
    publishedAt,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt,
    }
  } | order(publishedAt desc)`,
  NOTE_DETAILS: `*[_type == "note" && slug.current == $slug][0] {
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
  }`,
};
