// Hooks
import { useTranslation } from "react-i18next";

// Icons
import { Building } from "@/components/Icons.tsx";

interface ExperienceCardProps {
  role: string;
  description: string;
  company: string;
  datetime: string;
  responsibilities: string[];
  techStack: string[];
}

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
    <div className="bg-card rounded-lg p-8 my-6 transition-all duration-300 border-[1px] border-border shadow-md">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
        <div className="flex-grow">
          <h3 className="text-2xl font-bold mb-1">{role}</h3>
          <div className="flex items-center gap-x-2">
            <Building />
            <h4 className="text-base font-medium text-muted-foreground">
              {company}
            </h4>
          </div>
        </div>
        <span className="text-sm mt-2 md:mt-0 text-muted-foreground whitespace-nowrap">
          {datetime}
        </span>
      </div>
      <p className="mb-6 text-sm leading-relaxed">{description}</p>
      <div className="mb-6">
        <h5 className="font-semibold text-sm mb-3">
          {t("components.experienceCard.responsibilities.label")}
        </h5>
        <ul className="space-y-2">
          {responsibilities.map((responsibility, index) => (
            <li
              key={index}
              className="flex items-start text-sm text-muted-foreground"
            >
              <span className="mr-2">•</span>
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h5 className="font-semibold text-sm mb-3">
          {t("components.experienceCard.techStack.label")}
        </h5>
        <ul className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <li
              key={index}
              className="text-xs bg-primary-foreground py-1 px-3 rounded-full"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
