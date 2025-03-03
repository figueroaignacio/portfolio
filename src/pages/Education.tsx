import { useTranslation } from "react-i18next";

type Education = {
  title: string;
  institution: string;
  startYear?: string;
  endYear?: string;
  status?: string;
  description?: string;
};

export function Education() {
  const { t } = useTranslation();
  const education = t("pages.education.items", {
    returnObjects: true,
  }) as Education[];

  return (
    <section className="relative space-y-8" id="education">
      <h2 className="mb-5">{t("pages.education.title")}</h2>
      <div>
        {education.map((item, index) => (
          <div key={index} className="relative mb-8">
            <div className="space-y-2">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <h3 className="text-muted-foreground">{item.institution}</h3>

              {item.startYear && item.endYear ? (
                <p className="text-sm text-muted-foreground">{`${item.startYear} - ${item.endYear}`}</p>
              ) : item.status ? (
                <p className="text-sm text-green-500">{item.status}</p>
              ) : null}

              {item.description && (
                <p className="text-sm text-gray-500">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
