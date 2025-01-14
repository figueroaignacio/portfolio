// Components
import { Badge } from "@/components/Badge";

const techStack = [
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

export function Stack() {
  return (
    <div>
      {techStack.map(({ category, items }) => (
        <div key={category}>
          <h4>{category}</h4>
          <div className="flex gap-2 flex-wrap mt-3 mb-6">
            {items.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
