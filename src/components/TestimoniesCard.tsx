// Icons
import { ArrowUp } from "@/components/Icons.tsx";

// Types
import { Testinomies } from "@/lib/definitions";

interface TestimoniesCardProps extends Testinomies {}

export function TestimoniesCard({
  body,
  name,
  role,
  profile,
}: TestimoniesCardProps) {
  return (
    <div className="bg-card rounded-lg p-6 space-y-6 h-full flex flex-col justify-between border border-border">
      <p className="text-sm leading-relaxed tracking-tight text-muted-foreground">
        "{body}"
      </p>
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold">{name}</span>
          <span className="text-xs text-muted-foreground">{role}</span>
        </div>
        <a
          href={profile}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium flex items-center gap-1 underline"
        >
          LinkedIn
          <ArrowUp />
        </a>
      </div>
    </div>
  );
}
