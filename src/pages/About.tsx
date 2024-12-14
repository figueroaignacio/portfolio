// Hooks
import { Trans, useTranslation } from "react-i18next";

// Components
import { Badge } from "@/components/Badge.tsx";
import { Contacts } from "@/components/Contacts.tsx";
import { Seo } from "@/components/Seo";
import { TestimoniesCard } from "@/components/TestimoniesCard.tsx";

// Types
import { Testinomies } from "@/types/types.ts";

export function About() {
  const { t } = useTranslation();
  const testimonies = t("sections.testimonies.items", {
    returnObjects: true,
  }) as Testinomies[];

  const techStack = [
    "HTML",
    "CSS",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Nest.js",
    "Git",
    "PostgreSQL",
    "Prisma",
  ];

  return (
    <section className="min-h-[60dvh] flex flex-col justify-center gap-10">
      <Seo
        title={t("siteConfig.about.title")}
        description={t("siteConfig.about.description")}
      />
      <h1 className="text-4xl font-bold my-2">{t("pages.about.title")}</h1>
      <h2>
        <Trans
          i18nKey={t("pages.about.greeting")}
          components={{ span: <span className="text-accent" /> }}
        />
      </h2>
      <p>
        <Trans
          i18nKey={t("pages.about.intro")}
          components={{ span: <span className="text-accent"></span> }}
        />
      </p>
      <p>
        <Trans
          i18nKey={t("pages.about.collaboration")}
          components={{ span: <span className="text-accent"></span> }}
        />
      </p>
      <div>
        <Contacts />
      </div>
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
      <div>
        <h3 className="text-2xl font-semibold mt-6">
          {t("pages.about.techStack.title")}
        </h3>
        <ul className="flex gap-2 flex-wrap mt-5">
          {techStack.map((item, index) => (
            <li key={index} className="text-lg">
              <Badge>{item}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
