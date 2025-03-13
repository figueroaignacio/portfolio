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
        <div className=" md:flex-row md:justify-between">
          <div className="mt-2 md:mt-0">
            {startYear && endYear ? (
              <p className="text-xs  rounded-full inline-block text-muted-foreground">
                {startYear} - {endYear}
              </p>
            ) : status ? (
              <p className="text-xs text-green-700  rounded-full inline-block">
                {status}
              </p>
            ) : null}
          </div>

          <div>
            <h2 className="text-xl font-bold">{title}</h2>
            <h3 className="text-muted-foreground">{institution}</h3>
          </div>
        </div>

        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
