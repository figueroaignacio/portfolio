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
    <Link to={slug}>
      <div className="p-4 border-[1px] border-border rounded-lg shadow bg-card space-y-4 hover:scale-[1.01] transition-transform r h-full">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <ArrowUp />
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Link>
  );
}
