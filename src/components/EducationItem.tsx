import { Education } from "@/lib/definitions";

interface EducationItemProps extends Education {}

export function EducationItem({
  institution,
  title,
  description,
  endYear,
  startYear,
  status,
}: EducationItemProps) {
  return (
    <div className="relative mb-8">
      <div className="space-y-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <h3 className="text-muted-foreground">{institution}</h3>

        {startYear && endYear ? (
          <p className="text-sm text-muted-foreground">{`${startYear} - ${endYear}`}</p>
        ) : status ? (
          <p className="text-sm text-green-500">{status}</p>
        ) : null}

        {description && <p className="text-sm text-gray-500">{description}</p>}
      </div>
    </div>
  );
}
