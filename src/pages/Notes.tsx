// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import { NoteCard } from "@/components/NoteCard";
import { NoteCardSkeleton } from "@/components/NoteCardSkeleton";
import { Seo } from "@/components/Seo";

// Services
import { Note } from "@/lib/definitions";
import { getNotes } from "@/lib/services";

export function Notes() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [notes, setNotes] = useState<Note[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getNotes(language)
      .then((data) => {
        setNotes(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, [language]);

  if (isLoading) {
    return (
      <section>
        <h1 className="text-4xl font-bold my-5">{t("pages.notes.title")}</h1>
        <p className="mb-6">{t("pages.notes.description")}</p>
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index}>
              <NoteCardSkeleton />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
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
