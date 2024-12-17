// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useSanityFetch } from "@/hooks/useSanityFetch";
import { useTranslation } from "react-i18next";

// Components
import { NoteCard } from "@/components/NoteCard";
import { NoteCardSkeleton } from "@/components/NoteCardSkeleton";
import { Seo } from "@/components/Seo";

// Config
import { QUERY } from "@/config/queries";

interface Note {
  title: string;
  description: string;
  slug: {
    current: string;
  };
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
  const { t } = useTranslation();
  const { language } = useLanguage();
  const {
    data: notes,
    error,
    isLoading,
  } = useSanityFetch<Note[]>(QUERY.NOTE(language));

  if (isLoading) {
    return (
      <section>
        <h1 className="text-4xl font-bold my-5">{t("pages.notes.title")}</h1>
        <p className="mb-6">{t("pages.notes.description")}</p>
        <ul className="space-y-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <NoteCardSkeleton />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  if (!notes || notes.length === 0) {
    return <p>No notes available.</p>;
  }

  return (
    <section>
      <Seo
        title={t("siteConfig.notes.title")}
        description={t("siteConfig.notes.description")}
      />
      <h1 className="text-4xl font-bold my-5">{t("pages.notes.title")}</h1>
      <p className="mb-6">{t("pages.notes.description")}</p>
      <ul className="space-y-3">
        {notes.map((note) => (
          <li key={note.slug.current}>
            <NoteCard
              title={note.title}
              description={note.description}
              slug={`/notes/${note.slug.current}`}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
