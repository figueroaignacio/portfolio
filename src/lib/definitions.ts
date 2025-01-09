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
