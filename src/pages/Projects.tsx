// Hooks
import { useTranslation } from "react-i18next";

// Components
import { ProjectCard } from "@/components/ProjectCard.tsx";
import { Seo } from "@/components/Seo";

// Types
import { Project } from "@/types/types.ts";

export function Projects() {
  const { t } = useTranslation();
  const mainProjects = t("sections.mainProjects.items", {
    returnObjects: true,
  }) as Project[];

  return (
    <section>
      <Seo
        title={t("siteConfig.projects.title")}
        description={t("siteConfig.projects.description")}
      />
      <h1 className="text-4xl font-bold my-5">{t("pages.projects.title")}</h1>
      <ul className="space-y-5 items-center">
        {mainProjects.map((item, index) => (
          <li key={index}>
            <ProjectCard
              description={item.description}
              code={item.code}
              site={item.site}
              status={item.status}
              technologies={item.technologies}
              name={item.name}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
