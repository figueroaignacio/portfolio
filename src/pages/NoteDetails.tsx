// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import { BackButton } from "@/components/BackButton";
import { Seo } from "@/components/Seo";
import { Spinner } from "@/components/Spinner";
import { PortableText } from "@portabletext/react";

// Services
import { getNoteDetails } from "@/lib/services";

// Config
import { Note } from "@/lib/definitions";

export function NoteDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const [note, setNote] = useState<Note | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    setIsLoading(true);
    setError(null);
    getNoteDetails(slug, language)
      .then((data) => {
        setNote(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [slug, language]);

  if (isLoading)
    return (
      <div className="min-h-[80dvh] w-full flex justify-center items-center">
        <Spinner />
      </div>
    );

  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!note) return <p>No post found.</p>;

  return (
    <article>
      <Seo title={`Note - ${note.title}`} description={note.description} />
      <BackButton />
      <div className="border-b border-border pb-6 mb-6">
        <h1 className="text-4xl mb-5 font-bold">{note.title}</h1>
        <p>{note.description}</p>
      </div>
      <div className="prose dark:prose-invert space-y-6">
        <PortableText value={note.body} />
      </div>
    </article>
  );
}
