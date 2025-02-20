// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import { ProjectCard } from "@/components/ProjectCard";
import { Seo } from "@/components/Seo";
import { Spinner } from "@/components/Spinner";
import { CallToAction } from "@/sections/CallToAction";

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
      <section className="relative space-y-4">
        <Seo
          title={t("siteConfig.projects.title")}
          description={t("siteConfig.projects.description")}
        />
        <div className="min-h-[50dvh] flex justify-center items-center">
          <Spinner />
        </div>
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
    <section className="relative space-y-4">
      <Seo
        title={t("siteConfig.projects.title")}
        description={t("siteConfig.projects.description")}
      />
      <h1>{t("pages.projects.title")}</h1>
      <ul className="space-y-6 items-center">
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
