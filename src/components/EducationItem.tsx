// EducationItem.tsx
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
    <div className="relative mb-8 p-4 border-l-4 border-blue-500 rounded-md">
      <div className="space-y-3">
        <div className="md:flex-row md:justify-between">
          <div className="mt-2 md:mt-0">
            {startYear && endYear ? (
              <p className="text-xs rounded-full inline-block text-muted-foreground">
                {startYear} - {endYear}
              </p>
            ) : status ? (
              <p className="text-xs text-green-700  rounded-full inline-block">
                {status}
              </p>
            ) : null}
          </div>
          <div>
            <h3 className="font-bold">{title}</h3>
            <h4 className="text-sm font-medium">{institution}</h4>
          </div>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
