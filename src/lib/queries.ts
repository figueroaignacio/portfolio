export const GET_NOTES = (locale: string) => `
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
`;

export const GET_LATEST_NOTES = (locale: string) => `
  *[_type == "note" && locale == "${locale}"] | order(publishedAt desc) [0..1] {
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
`;

export const GET_NOTE_DETAILS = (slug: string, locale: string) => `
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
`;

export const GET_ALL_PROJECTS = (locale: string) => `
  *[_type == "project" && locale == "${locale}"] | order(publishedAt desc) {
    title,
    description,
    slug,
    body,
    liveSite,
    sourceCode,
    technologies[]->{
      title
    },
    publishedAt,
    mainImage {
      asset -> {
        _id,
        url
      },
      alt
    }
  }
`;

export const GET_LATEST_PROJECTS = (locale: string) => `
  *[_type == "project" && locale == "${locale}"] | order(publishedAt desc) [0..1] {
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
`;

export const GET_PROJECT_DETAILS = (slug: string, locale: string) => `
  *[_type == "project" && slug.current == "${slug}" && locale == "${locale}"][0] {
    title,
    description,
    body,
    publishedAt,
    liveSite,
    sourceCode,
    technologies[]->{
      title
    },
    mainImage {
      asset -> {
        url
      },
      alt,
    }
  }
`;
