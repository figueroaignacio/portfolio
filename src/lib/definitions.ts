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

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  code: string;
  site: string;
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
