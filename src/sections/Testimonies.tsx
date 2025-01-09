// Hooks
import { useTranslation } from "react-i18next";

// Components
import { TestimoniesCard } from "@/components/TestimoniesCard";

// Types
import { Testinomies } from "@/lib/definitions";

export function Testimonies() {
  const { t } = useTranslation();

  const testimonies = t("sections.testimonies.items", {
    returnObjects: true,
  }) as Testinomies[];

  return (
    <div className="my-2">
      <div className="space-y-2 mb-3">
        <h3 className="text-2xl font-semibold mt-6">
          {t("sections.testimonies.title")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("sections.testimonies.description")}
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {testimonies.map((testimony, index) => (
          <li key={index}>
            <TestimoniesCard
              role={testimony.role}
              name={testimony.name}
              body={testimony.body}
              profile={testimony.profile}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
