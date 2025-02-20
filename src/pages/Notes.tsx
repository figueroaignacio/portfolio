// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import { Seo } from "@/components/Seo";

// Services
import { NoteCard } from "@/components/NoteCard";
import { Spinner } from "@/components/Spinner";
import { Note } from "@/lib/definitions";
import { getNotes } from "@/lib/services";

export function Notes() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [notes, setNotes] = useState<Note[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getNotes(language);
        setNotes(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, [language]);

  if (isLoading) {
    return (
      <section className="relative space-y-4">
        <Seo
          title={t("siteConfig.projects.title")}
          description={t("siteConfig.projects.description")}
        />
        <div className="min-h-[50dvh] flex justify-center items-center">
          <Spinner />
        </div>
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
    <section className="relative space-y-4">
      <Seo
        title={t("siteConfig.notes.title")}
        description={t("siteConfig.notes.description")}
      />
      <h1>{t("pages.notes.title")}</h1>
      <p className="text-sm mb-6">{t("pages.notes.description")}</p>
      <ul className="space-y-6 gap-3">
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
