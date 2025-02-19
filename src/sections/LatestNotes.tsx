// Hooks
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useState } from "react";

// Components
import { ArrowUp } from "@/components/Icons";
import { TransitionLink } from "@/components/TransitionLink";

// Utils
import { Note } from "@/lib/definitions";
import { getLatestNotes } from "@/lib/services";

export function LatestNotes() {
  const [notes, setNotes] = useState<Note[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    async function fetchNotes() {
      const latestNotes = await getLatestNotes(language);
      setNotes(latestNotes);
    }

    fetchNotes();
  }, [language]);

  return (
    <section>
      <h2 className="mb-5">Latest Notes</h2>
      <ul className="space-y-5">
        {notes.map((note) => (
          <li key={note.slug.current}>
            <TransitionLink
              to={`/notes/${note.slug.current}`}
              className="flex justify-between items-center w-full h-full border border-border p-5 rounded-md hover:backdrop-brightness-150 transition-all duration-150 group"
            >
              <h3 className="text-sm">{note.title}</h3>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <ArrowUp />
              </div>
            </TransitionLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
