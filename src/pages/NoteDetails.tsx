// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useSanityFetch } from "@/hooks/useSanityFetch";
import { useParams } from "react-router-dom";

// Components
import { BackButton } from "@/components/BackButton";
import { Spinner } from "@/components/Spinner";
import { PortableText } from "@portabletext/react";

// Config
import { QUERY } from "@/config/queries";
import { TypedObject } from "@portabletext/types";

interface Note {
  title: string;
  description: string;
  body: TypedObject[];
  publishedAt: string;
  mainImage: {
    asset: {
      url: string;
    };
    alt: string;
  };
}

export function NoteDetails() {
  const { slug } = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const {
    data: note,
    isLoading,
    error,
  } = useSanityFetch<Note>(QUERY.NOTE_DETAILS(slug!, language));

  if (isLoading)
    return (
      <div className="min-h-[80dvh] w-full flex justify-center items-center">
        <Spinner />
      </div>
    );
  if (error) return <p className="text-red-500">Error: {error.message}</p>;
  if (!note) return <p>No post found.</p>;

  return (
    <article>
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
