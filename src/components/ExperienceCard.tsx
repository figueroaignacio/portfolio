// Hooks

import { useTranslation } from "react-i18next";

// Types
import type { Experience } from "@/lib/definitions";

interface ExperienceCardProps extends Experience {}

export function ExperienceCard({
  company,
  datetime,
  responsibilities,
  role,
  description,
  techStack,
}: ExperienceCardProps) {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 group flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex-grow">
          <h3 className="text-lg font-bold tracking-tight upper">{role}</h3>
          <div className="flex items-center gap-x-2 mt-1">
            <h4 className="text-xs text-muted-foreground">🏢 {company}</h4>
          </div>
        </div>
        <span className="text-xs mt-2 md:mt-0 text-muted-foreground whitespace-nowrap font-medium">
          {datetime}
        </span>
      </div>

      <p className="text-xs leading-relaxed border-l-4 border-l-accent py-2  pl-4">
        {description}
      </p>

      <div>
        <h5 className="font-semibold text-xs uppercase tracking-wider mb-3">
          {t("components.experienceCard.responsibilities.label")}
        </h5>
        <ul className="space-y-2.5">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="flex items-start group/item text-xs">
              <span className="text-muted-foreground group-hover/item:text-foreground transition-colors">
                - {responsibility}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h5 className="font-semibold text-xs uppercase tracking-wider mb-3">
          💻 {t("components.experienceCard.techStack.label")}
        </h5>
        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="text-xs border-border border py-1 px-3 rounded-full hover:bg-muted hover:border-primary/20 transition-colors duration-200"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
