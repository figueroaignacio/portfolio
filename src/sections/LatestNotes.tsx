// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import { ArrowUp } from "@/components/Icons";
import { TransitionLink } from "@/components/TransitionLink";

// Utils
import { Note } from "@/lib/definitions";
import { getLatestNotes } from "@/lib/services";

export function LatestNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { language } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    async function fetchNotes() {
      try {
        setIsLoading(true);
        setError(null);
        const latestNotes = await getLatestNotes(language);
        setNotes(latestNotes);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setIsLoading(false);
      }
    }

    fetchNotes();
  }, [language]);

  if (isLoading) {
    return (
      <section className="space-y-5">
        <h2 className="mb-5">{t("sections.latestProjects.title")}</h2>
        <ul className="space-y-5">
          {Array.from({ length: 2 }).map((_, index) => (
            <li key={index}>
              <div className="flex justify-between w-full h-full border border-border p-5 rounded-md">
                <div className="space-y-5 w-full">
                  <div className="h-4 bg-gray-200 dark:bg-gray-800/40 rounded animate-pulse w-3/4"></div>
                </div>
              </div>
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
    return <p>No projects available.</p>;
  }

  return (
    <section>
      <h2 className="mb-5">{t("sections.latestNotes.title")}</h2>
      <ul className="space-y-5">
        {notes.map((note) => (
          <li key={note.slug.current}>
            <TransitionLink
              to={`/notes/${note.slug.current}`}
              className="flex justify-between items-center w-full h-full border border-border p-5 rounded-md hover:backdrop-brightness-150 transition-all duration-150 group"
            >
              <h3 className="text-sm">{note.title}</h3>
              <div className="lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-150">
                <ArrowUp />
              </div>
            </TransitionLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
