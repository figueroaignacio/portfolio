// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import { BackButton } from "@/components/BackButton";
import { Badge } from "@/components/Badge";
import { Seo } from "@/components/Seo";
import { Spinner } from "@/components/Spinner";
import { PortableText } from "@portabletext/react";

// Services
import { Project } from "@/lib/definitions";
import { getProjectDetails } from "@/lib/services";

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const [project, setProject] = useState<Project | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProjectDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getProjectDetails(slug, language);
        if (!data) {
          setError("Note not found.");
          return;
        }
        setProject(data);
      } catch (err: any) {
        setError(err.message || "An error occurred.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjectDetails();
  }, [slug, language]);

  if (isLoading)
    return (
      <div className="min-h-[80dvh] w-full flex justify-center items-center">
        <Spinner />
      </div>
    );

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!project) return <p>No post found.</p>;

  return (
    <article className="grid grid-cols-1 lg:grid-cols-12 lg:border lg:border-border rounded-md lg:min-h-dvh">
      <Seo title={project.title} description={project.description} />
      <div className="col-span-5 lg:border-r lg:border-border h-full p-3 lg:p-6 space-y-3">
        <BackButton />
        <h1 className="text-lg font-bold">{project.title}</h1>
        <p className="text-sm text-foreground">{project.description}</p>
        {project.technologies.length > 0 && (
          <div className="border border-border p-3 rounded-md bg-card">
            <p className="text-sm mb-3">Technologies used 👇</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index}>{tech.title}</Badge>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="lg:max-h-[80dvh] lg:overflow-y-scroll px-3 col-span-7 p-3 lg:p-6">
        <PortableText value={project.body} />
      </div>
    </article>
  );
}
