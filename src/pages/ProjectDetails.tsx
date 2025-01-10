import { Seo } from "@/components/Seo";
import { Spinner } from "@/components/Spinner";
import { useLanguage } from "@/hooks/useLanguage";
import { Note } from "@/lib/definitions";
import { getProjectDetails } from "@/lib/services";
import { PortableText } from "@portabletext/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function ProjectDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const [project, setProject] = useState<Note | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProjectDetails = async () => {
      setIsLoading(true);
      setError(null);

      try {
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
      <Seo title={`${project.title}`} description={project.description} />
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <div className="prose dark:prose-invert space-y-6">
        <PortableText value={project.body} />
      </div>
    </article>
  );
}
