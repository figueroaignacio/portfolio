// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Componets
import { ArrowUp } from "@/components/Icons";
import { TransitionLink } from "@/components/TransitionLink";

// Utils
import { Project } from "@/lib/definitions";
import { getLatestProjects } from "@/lib/services";

export function LatestProjects() {
  const [latestProjects, setLatestProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchLatestProjects() {
      try {
        setIsLoading(true);
        setError(null);
        const latestProjects = await getLatestProjects(language);
        setLatestProjects(latestProjects);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    }

    fetchLatestProjects();
  }, [language]);

  if (isLoading) {
    return (
      <section className="space-y-5">
        <h2 className="mb-5">{t("sections.latestProjects.title")}</h2>
        <ul className="space-y-5">
          {Array.from({ length: 2 }).map((_, index) => (
            <li key={index}>
              <div className="flex justify-between w-full h-full border border-border p-5 rounded-md">
                <div className="space-y-5 w-full">
                  <div className="h-4 bg-gray-200 dark:bg-gray-800/40 rounded animate-pulse w-3/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-800/40 rounded animate-pulse w-full"></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!latestProjects || latestProjects.length === 0) {
    return <p>No projects available.</p>;
  }

  return (
    <section className="space-y-5">
      <h2 className="mb-5">{t("sections.latestProjects.title")}</h2>
      <ul className="space-y-5">
        {latestProjects.map((project) => (
          <li key={project.slug.current}>
            <TransitionLink
              to={`/project/${project.slug.current}`}
              className="flex justify-between  w-full h-full border border-border p-5 rounded-md hover:backdrop-brightness-150 transition-all duration-150 group"
            >
              <div className="space-y-5">
                <h3 className="text-sm">{project.title}</h3>
                <p className="text-xs">{project.description}</p>
              </div>

              <div className="lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-150">
                <ArrowUp />
              </div>
            </TransitionLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
