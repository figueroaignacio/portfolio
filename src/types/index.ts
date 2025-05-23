export type Locale = 'en' | 'es';

export type Education = {
  title: string;
  description: string;
  place: string;
  date: string;
  tags: string[];
};

export type Experience = {
  role: string;
  description: string;
  type: string;
  time: string;
  place: string;
  workitems: string[];
  impact: string;
  tags: string[];
};
