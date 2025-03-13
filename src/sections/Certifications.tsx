// Hooks
import { useTranslation } from "react-i18next";

// Components
import { CertificationItem } from "@/components/CertificationItem";

// Types
import { Certification } from "@/lib/definitions";

export function Certifications() {
  const { t } = useTranslation();
  const certifications = t("sections.certifications.items", {
    returnObjects: true,
  }) as Certification[];

  return (
    <section className="relative py-10 max-w-4xl mx-auto" id="certifications">
      <h2 className="mb-5">{t("sections.certifications.title")}</h2>
      <ul className="space-y-12">
        {certifications.map((certification, index) => (
          <li key={index}>
            <CertificationItem
              title={certification.title}
              place={certification.place}
              credential={certification.credential}
              urlCredential={certification.urlCredential}
              description={certification.description}
              note={certification.note}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
