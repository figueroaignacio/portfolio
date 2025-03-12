// Components
import { TransitionLink } from "./TransitionLink";

// Icons
import { ArrowUp } from "./Icons";

// Types
import { Note } from "@/lib/definitions";

interface NoteCardProps extends Pick<Note, "title" | "description"> {
  slug: string;
}

export function NoteCard({ title, slug, description }: NoteCardProps) {
  return (
    <TransitionLink
      className="flex flex-col justify-between w-full h-full border border-border p-5 rounded-2xl hover:backdrop-brightness-150 transition-all duration-150 group space-y-3"
      to={slug}
    >
      <div className="flex justify-between items-center">
        <h2 className="">{title}</h2>
        <div className="lg:opacity-0 lg:group-hover:opacity-100 lg:transition-opacity lg:duration-150">
          <ArrowUp />
        </div>
      </div>
      <p className="text-sm line-clamp-2">{description}</p>
      {/* <TransitionLink to={slug} className="">
        Read More
        <ArrowUp />
      </TransitionLink> */}
    </TransitionLink>
  );
}
