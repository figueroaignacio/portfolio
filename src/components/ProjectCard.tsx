// Components
import { TransitionLink } from "./TransitionLink";

// Icons
import { ArrowUp, GitHub } from "@/components/Icons.tsx";

// Types
import { Project } from "@/lib/definitions";

interface ProjectCardProps
  extends Pick<Project, "title" | "description" | "liveSite" | "sourceCode"> {
  slug: string;
}

export function ProjectCard({
  description,
  title,
  slug,
  liveSite,
  sourceCode,
}: ProjectCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="p-6 space-y-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <TransitionLink to={slug}>
              <h3 className="font-bold tracking-tight">{title}</h3>
            </TransitionLink>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="flex justify-between pt-4 space-x-4">
          <a
            href={sourceCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 gap-2 border border-border rounded-md text-sm hover:bg-primary-foreground transition-colors duration-100"
          >
            <GitHub />
            <span>Código fuente</span>
          </a>
          <a
            href={liveSite}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 gap-2 border border-border rounded-md text-sm hover:bg-primary-foreground transition-colors duration-100"
          >
            <span>Ver proyecto</span>
            <ArrowUp />
          </a>
        </div>
        <div className="text-center">
          <TransitionLink
            to={slug}
            className="flex-1 inline-flex items-center justify-center px-4 py-2 gap-2 border border-border rounded-md text-sm hover:bg-primary-foreground transition-colors duration-100 w-full"
          >
            More Details
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
