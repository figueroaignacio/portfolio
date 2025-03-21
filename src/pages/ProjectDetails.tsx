// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

// Components
import { RichTextComponents } from "@/components/RichTextComponents";
import { Seo } from "@/components/Seo";
import { Spinner } from "@/components/Spinner";
import { PortableText } from "@portabletext/react";

// Services
import { Badge } from "@/components/Badge";
import { Separator } from "@/components/Separator";
import { Project } from "@/lib/definitions";
import { getProjectDetails } from "@/lib/services";

export function ProjectDetailsPage() {
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
    <article>
      <Seo title={project.title} description={project.description} />
      <div className="h-full space-y-5">
        <h1 className="text-lg font-bold">{project.title}</h1>
        <p className="text-sm text-foreground">{project.description}</p>
        <Separator className="py-6" />
        {project.technologies.length > 0 && (
          <div className="border border-border p-3 rounded-2xl bg-card">
            <p className="text-sm mb-3">Technologies used 👇</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index}>{tech.title}</Badge>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="pt-12">
        <PortableText value={project.body} components={RichTextComponents} />
      </div>
    </article>
  );
}
