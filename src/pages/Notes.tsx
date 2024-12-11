// Hooks
import { useSanityFetch } from "@/hooks/useSanityFetch";

// Components
import { NoteCard } from "@/components/NoteCard";

// Config
import { Spinner } from "@/components/Spinner";
import { QUERY } from "@/config/queries";

interface Note {
  title: string;
  description: string;
  slug: string;
  body: string;
  publishedAt: string;
  mainImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
}

export function Notes() {
  const { data: notes, error, isLoading } = useSanityFetch<Note[]>(QUERY.NOTE);

  if (isLoading) {
    return (
      <section>
        <h1 className="text-4xl font-bold my-5">Notes</h1>
        <p className="mb-6">
          A collection of my personal brief notes, tips, short-form posts, or
          snippets I use throughout my projects.
        </p>
        <div className="min-h-[70dvh] w-full flex justify-center items-center">
          <Spinner />
        </div>
      </section>
    );
  }
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  if (!notes || notes.length === 0) {
    return <p>No notes available.</p>;
  }

  return (
    <section>
      <h1 className="text-4xl font-bold my-5">Notes</h1>
      <p className="mb-6">
        A collection of my personal brief notes, tips, short-form posts, or
        snippets I use throughout my projects.
      </p>
      <ul className="space-y-6">
        {notes.map((note) => (
          <li key={note.slug}>
            <NoteCard
              title={note.title}
              description={note.description}
              slug={`/notes/${note.slug}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
