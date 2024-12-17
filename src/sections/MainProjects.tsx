// Hooks
import { useTranslation } from "react-i18next";

// Components
import { ProjectCard } from "@/components/ProjectCard";

// Types
import { Project } from "@/types/types";

export function MainProjects() {
  const { t } = useTranslation();

  const mainProjects = t("sections.mainProjects.items", {
    returnObjects: true,
  }) as Project[];

  return (
    <div>
      <h2 className="font-bold text-xl mb-5">
        {t("sections.mainProjects.title")}
      </h2>
      <ul className="space-y-5 items-center">
        {mainProjects.map((item, index) => (
          <li key={index}>
            <ProjectCard
              description={item.description}
              code={item.code}
              site={item.site}
              technologies={item.technologies}
              name={item.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
