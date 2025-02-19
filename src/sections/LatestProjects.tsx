// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";

// Componets
import { ArrowUp } from "@/components/Icons";
import { TransitionLink } from "@/components/TransitionLink";

// Utils
import { Project } from "@/lib/definitions";
import { getLatestProjects } from "@/lib/services";

export function LatestProjects() {
  const [latestProjects, setLatestProjects] = useState<Project[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    async function fetchLatestProjects() {
      const latestProjects = await getLatestProjects(language);

      setLatestProjects(latestProjects);
    }

    fetchLatestProjects();
  }, [language]);

  return (
    <section className="space-y-5">
      <h2>Latest Projects</h2>
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

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <ArrowUp />
              </div>
            </TransitionLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
