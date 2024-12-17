// Components
import { Link } from "react-router-dom";

// Icons
import { ArrowUp } from "./Icons";

interface NoteCardProps {
  title: string;
  slug: string;
  description: string;
}

export function NoteCard({ title, slug, description }: NoteCardProps) {
  return (
    <div className="p-4 border-[1px] border-border rounded-lg shadow-md bg-card space-y-4 h-full flex flex-col">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-muted-foreground">{description}</p>
      <Link
        to={slug}
        className="flex items-center justify-center gap-2 px-6 py-2 rounded-md text-sm bg-primary hover:bg-primary-foreground duration-100 border-[1px] border-border"
      >
        Read More
        <ArrowUp />
      </Link>
    </div>
  );
}
