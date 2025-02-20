// Hooks
import { useTranslation } from "react-i18next";

// Components
import { Badge } from "@/components/Badge";

// Constants
import { techStack } from "@/lib/constants";

export function Stack() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-xl font-semibold mb-5">
        {t("components.myStack.title")}
      </h3>
      {techStack.map(({ category, items }) => (
        <div key={category}>
          <h4>{category}</h4>
          <div className="flex gap-2 flex-wrap mt-3 mb-6">
            {items.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
