// Hooks
import { useState } from "react";
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

  const [visibleCount, setVisibleCount] = useState(2);

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 2);
  };

  const collapse = () => {
    setVisibleCount(2);
  };

  return (
    <div className="my-2">
      <div className="space-y-2 mb-3">
        <h3 className="font-semibold mt-6">
          {t("sections.testimonies.title")}
        </h3>
        <p className="text-sm text-muted-foreground">
          {t("sections.testimonies.description")}
        </p>
      </div>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {testimonies.slice(0, visibleCount).map((testimony, index) => (
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
      {visibleCount < testimonies.length ? (
        <button
          onClick={showMore}
          className="border border-border w-full mt-5 py-2 rounded-md hover:backdrop-brightness-150 transition-all duration-150 text-xs"
        >
          {t("sections.testimonies.showMore")}
        </button>
      ) : (
        <button
          onClick={collapse}
          className="border border-border w-full mt-5 py-2 rounded-md hover:backdrop-brightness-150 transition-all duration-150 text-xs"
        >
          {t("sections.testimonies.collapse")}
        </button>
      )}
    </div>
  );
}
