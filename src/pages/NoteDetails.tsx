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
import { Note } from "@/lib/definitions";
import { getNoteDetails } from "@/lib/services";

export function NoteDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const [note, setNote] = useState<Note | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchNoteDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getNoteDetails(slug, language);
        if (!data) {
          setError("Note not found.");
          return;
        }
        setNote(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNoteDetails();
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
      <Seo title={note.title} description={note.description} />
      <div className="border-b border-border pb-6 mb-6">
        <h1 className="text-3xl mb-5 font-bold">{note.title}</h1>
        <p className="max-w-xl text-sm">{note.description}</p>
      </div>
      <div className="space-y-6 overflow-x-auto">
        <PortableText value={note.body} components={RichTextComponents} />
      </div>
    </article>
  );
}
