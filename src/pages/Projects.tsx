// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import { ProjectCard } from "@/components/ProjectCard.tsx";
import { Seo } from "@/components/Seo";
import { Spinner } from "@/components/Spinner";

// Types
import { Project } from "@/lib/definitions";

// Services
import { getProjects } from "@/lib/services";

export function Projects() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await getProjects(language);
        setProjects(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [language]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!projects || projects.length === 0) {
    return <p>No notes available.</p>;
  }

  return (
    <section>
      <Seo
        title={t("siteConfig.projects.title")}
        description={t("siteConfig.projects.description")}
      />
      <ul className="space-y-5 items-center">
        {projects.map((project, index) => (
          <li key={index}>
            <ProjectCard
              liveSite={project.liveSite}
              sourceCode={project.sourceCode}
              slug={`/projects/${project.slug.current}`}
              title={project.title}
              description={project.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
