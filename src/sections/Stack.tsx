// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Badge } from "@/components/Badge";

const techStack = [
  "HTML",
  "CSS",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "Nest.js",
  "Git",
  "PostgreSQL",
  "Prisma",
];

export function Stack() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-2xl font-semibold mt-6">
        {t("pages.about.techStack.title")}
      </h3>
      <ul className="flex gap-2 flex-wrap mt-5">
        {techStack.map((item, index) => (
          <li key={index} className="text-lg">
            <Badge>{item}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}
