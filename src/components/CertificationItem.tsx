// Components
import { Alert } from "./Alert";

// Types
import { Certification } from "@/lib/definitions";

interface CertificationItemProps extends Certification {}

export function CertificationItem({
  title,
  place,
  credential,
  urlCredential,
  description,
  note,
}: CertificationItemProps) {
  return (
    <div className="group relative p-5 border-l-4 border-blue-500 rounded-md">
      <div className="flex flex-col space-y-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
          <div>
            <h3 className="font-bold">{title}</h3>
            <p className="text-sm font-medium">{place}</p>
          </div>
          <div className="gap-3">
            <div className="flex items-center px-3 py-1 rounded-full">
              <span className="text-xs font-medium">
                ID:{" "}
                <a href={urlCredential} className="underline">
                  {credential}
                </a>
              </span>
            </div>
          </div>
        </div>
        {description && (
          <div className="text-sm mt-1">
            <p>{description}</p>
          </div>
        )}
        {note && (
          <Alert>
            <span className="flex items-center">{note}</span>
          </Alert>
        )}
      </div>
    </div>
  );
}
