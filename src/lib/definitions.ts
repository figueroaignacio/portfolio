import { TypedObject } from "@portabletext/types";

export interface Note {
  title: string;
  description: string;
  slug: {
    current: string;
  };
  body: TypedObject[];
  publishedAt: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
}

export interface Project extends Note {
  liveSite: string;
  sourceCode: string;
  technologies: {
    title: string;
  }[];
}

export interface Experience {
  company: string;
  datetime: string;
  role: string;
  description: string;
  responsibilities: string[];
  techStack: string[];
}

export interface Testinomies {
  body: string;
  name: string;
  role: string;
  profile: string;
}
