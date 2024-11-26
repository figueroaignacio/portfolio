export type Project = {
  name: string
  description: string
  technologies: string[]
  code: string
  site: string
  status: "In Development" | "Completed" | "Under maintenance"
}

export type Experience = {
  company: string;
  datetime: string;
  role: string;
  responsibilities: string[];
  description: string;
  techStack: string[];
}