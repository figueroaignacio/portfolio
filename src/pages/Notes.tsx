// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components
import { Seo } from "@/components/Seo";
import { Spinner } from "@/components/Spinner";

// Services
import { Note } from "@/lib/definitions";
import { getNotes } from "@/lib/services";

export function NotesPage() {
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

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-border text-left text-xs font-medium tracking-wider">
                Título
              </th>
              <th className="px-6 py-3 border-b border-border text-left text-xs font-medium tracking-wider">
                Fecha
              </th>
              <th className="px-6 py-3 border-b border-border text-left text-xs font-medium tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {notes.map((note) => (
              <tr key={note.slug.current}>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <a
                    href={`/notes/${note.slug.current}`}
                    className="underline hover:text-accent"
                  >
                    {note.title}
                  </a>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {new Date(note.publishedAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <a
                    href={`/notes/${note.slug.current}`}
                    className="hover:underline hover:text-accent"
                  >
                    Ver detalles
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
