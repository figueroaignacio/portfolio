// Hooks
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  const actions = [
    {
      icon: <GitHub />,
      label: t("components.projectCard.actions.sourceCode"),
      href: sourceCode,
    },
    {
      icon: <ArrowUp />,
      label: t("components.projectCard.actions.liveSite"),
      href: liveSite,
    },
  ];

  return (
    <div className="border border-border p-6 rounded-md">
      <div className="relative w-fit">
        <TransitionLink to={slug}>
          <h3 className="underline font-semibold mb-4 relative group">
            {title}
            <span className="absolute left-0 top-full mt-1 text-xs backdrop-blur-md px-4 border border-border py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
              {t("components.projectCard.actions.moreDetails")}
            </span>
          </h3>
        </TransitionLink>
      </div>
      <p className="text-sm">{description}</p>
      <div className="flex justify-end items-center gap-x-16 pt-6">
        {actions.map((action) => (
          <a
            href={action.href}
            className="flex items-center gap-x-3 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-xs text-muted-foreground">
              {action.label}
            </span>
            {action.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
