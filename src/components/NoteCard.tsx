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
    <div className="p-4 border-[1px] border-border rounded-lg bg-card space-y-4 h-full flex flex-col justify-between">
      <h2 className="font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
      <Link
        to={slug}
        className="flex items-center justify-center gap-2 px-6 py-2 rounded-md text-sm  hover:bg-primary-foreground duration-100 border-[1px] border-border"
      >
        Read More
        <ArrowUp />
      </Link>
    </div>
  );
}
