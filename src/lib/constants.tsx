import { GitHub, LinkedIn, Mail } from "@/components/Icons.tsx";

export const CONTACTS = [
  {
    title: "Mail",
    href: "mailto:ignaciofigueroadev@gmail.com",
    icon: <Mail />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/ignacio-figueroa-0a1ba0263/",
    icon: <LinkedIn />,
  },
  {
    title: "GitHub",
    href: "https://github.com/figueroaignacio/",
    icon: <GitHub />,
  },
];

export const techStack = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Astro",
      "CSS Modules",
      "Tailwind",
      "React Hook Form",
      "React Router",
    ],
  },
  {
    category: "UI Component Frameworks",
    items: ["shadcn/ui", "Radix", "MUI"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Nest.js", "PostgreSQL", "NeonDB"],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "Prisma",
      "i18n",
      "Class Varience Authority",
      "clsx",
      "Auth.js",
    ],
  },
];
