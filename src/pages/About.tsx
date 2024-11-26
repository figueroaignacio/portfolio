// Hooks
import { Trans, useTranslation } from "react-i18next";

// Utils
import { motion } from 'framer-motion';

// Components
import { TestimoniesCard } from "@/components/TestimoniesCard.tsx";
import { Badge } from "@/components/Badge.tsx";

// Constants
import { containerVariants, fadeUpVariants, listItemVariants } from "@/constants/animations.ts";

type Testinomies = {
  body: string;
  name: string;
  role: string;
  profile: string;
}


export function About() {
  const { t } = useTranslation();
  const testimonies = t("sections.testimonies.items", { returnObjects: true }) as Testinomies[]
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
    "Prisma"
  ];

  return (
    <motion.section
      className="min-h-[60dvh] flex flex-col justify-center gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl font-bold my-2"
        variants={fadeUpVariants}
      >
        {t("pages.about.title")}
      </motion.h1>
      <motion.h2 variants={fadeUpVariants}>
        <Trans
          i18nKey={t("pages.about.greeting")}
          components={{ span: <span className="text-accent" /> }} />
      </motion.h2>
      <motion.p variants={fadeUpVariants}>
        <Trans
          i18nKey={t("pages.about.intro")}
          components={{ span: <span className="text-accent"></span> }} />
      </motion.p>
      <motion.p variants={fadeUpVariants}>
        <Trans
          i18nKey={t("pages.about.collaboration")}
          components={{ span: <span className="text-accent"></span> }} />
      </motion.p>
      <div className="my-2">
        <div className="space-y-2 mb-3">
          <motion.h3
            variants={fadeUpVariants}
            className="text-2xl font-semibold mt-6">{t("sections.testimonies.title")}</motion.h3>
          <motion.p
            variants={fadeUpVariants}
            className="text-sm text-muted-foreground">{t("sections.testimonies.description")}</motion.p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {testimonies.map((testimony, index) => (
            <motion.li
              variants={fadeUpVariants}
              key={index}>
              <TestimoniesCard
                role={testimony.role}
                name={testimony.name}
                body={testimony.body}
                profile={testimony.profile}
              />
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.div variants={fadeUpVariants}>
        <h3 className="text-2xl font-semibold mt-6">
          {t("pages.about.techStack.title")}
        </h3>
        <motion.ul
          className="flex gap-2 flex-wrap mt-5"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {techStack.map((item, index) => (
            <motion.li
              key={index}
              className="text-lg"
              variants={listItemVariants}
            >
              <Badge>
                {item}
              </Badge>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
}
