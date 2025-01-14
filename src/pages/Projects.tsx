// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import { ProjectCard } from "@/components/ProjectCard.tsx";
import { Seo } from "@/components/Seo";

// Types
import { Project } from "@/lib/definitions";

// Services
import { ProjectCardSkeleton } from "@/components/ProjectCardSkeleton";
import { getProjects } from "@/lib/services";
import { CallToAction } from "@/sections/CallToAction";

export function Projects() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [projects, setProjects] = useState<Project[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);
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
    return (
      <section>
        <ul className="space-y-5 items-center">
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index}>
              <ProjectCardSkeleton />
            </li>
          ))}
        </ul>
      </section>
    );
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
      <CallToAction />
    </section>
  );
}
