// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import { ArrowUp } from "@/components/Icons";
import { TransitionLink } from "@/components/TransitionLink";

// Utils
import { Project } from "@/lib/definitions";
import { getLatestProjects } from "@/lib/services";

export function LatestProjects() {
  const [state, setState] = useState<{
    latestProjects: Project[];
    isLoading: boolean;
    error: string | null;
  }>({
    latestProjects: [],
    isLoading: false,
    error: null,
  });

  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchLatestProjects() {
      setState((prev) => ({ ...prev, isLoading: true, error: null }));
      try {
        const latestProjects = await getLatestProjects(language);
        setState({ latestProjects, isLoading: false, error: null });
      } catch (err) {
        setState({
          latestProjects: [],
          isLoading: false,
          error: err instanceof Error ? err.message : "An error occurred",
        });
      }
    }

    fetchLatestProjects();
  }, [language]);

  const { latestProjects, isLoading, error } = state;

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
    return (
      <p className="text-red-500">
        {t("errors.fetchProjects")} {error}
      </p>
    );
  }

  if (latestProjects.length === 0) {
    return <p>{t("sections.latestProjects.noProjects")}</p>;
  }

  return (
    <section className="space-y-5">
      <h2 className="mb-5">{t("sections.latestProjects.title")}</h2>
      <ul className="space-y-5">
        {latestProjects.map((project) => (
          <li key={project.slug?.current}>
            <TransitionLink
              to={`/projects/${project.slug.current}`}
              className="flex justify-between w-full h-full border border-border p-5  hover:backdrop-brightness-150 rounded-md hover:rotate-[0.3deg] hover:scale-[1.02] transition-all duration-150 group"
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
