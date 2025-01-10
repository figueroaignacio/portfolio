// Components
// import { Badge } from "@/components/Badge.tsx";

// Icons
// import { ArrowUp, Document, GitHub } from "@/components/Icons.tsx";
import { Link } from "react-router-dom";
import { Document } from "./Icons";

interface ProjectCardProps {
  title: string;
  description: string;
  slug: string;
}

export function ProjectCard({ description, title, slug }: ProjectCardProps) {
  return (
    <div className="bg-card rounded-lg border border-border">
      <div className="p-6 space-y-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Document />
            <Link to={slug}>
              <h3 className="font-bold tracking-tight">{title}</h3>
            </Link>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        {/* {technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge key={index}>{tech}</Badge>
            ))}
          </div>
        )} */}
        <div className="flex justify-between pt-4 space-x-4">
          {/* <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 gap-2 border border-border rounded-md text-sm hover:bg-primary-foreground transition-colors duration-100"
          >
            <GitHub />
            <span>Código fuente</span>
          </a>
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center px-4 py-2 gap-2 border border-border rounded-md text-sm hover:bg-primary-foreground transition-colors duration-100"
          >
            <span>Ver proyecto</span>
            <ArrowUp />
          </a> */}
        </div>
      </div>
    </div>
  );
}
