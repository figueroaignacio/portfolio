// Hooks
import { useTranslation } from "react-i18next";

// Components
import { ProjectCard } from "@/components/ProjectCard.tsx";

// Utils
import { containerVariants, fadeUpVariants } from "@/constants/animations.ts";
import { motion } from "framer-motion";

// Types
import { Project } from "@/types/types.ts";

export function Projects() {
  const { t } = useTranslation();
  const mainProjects = t("sections.mainProjects.items", { returnObjects: true }) as Project[]

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-4xl font-bold my-5"
        variants={fadeUpVariants}>
        {t("pages.projects.title")}
      </motion.h1>
      <ul className="space-y-5 items-center">
        {mainProjects.map((item, index) => (
          <motion.li
            key={index}
            variants={fadeUpVariants}>
            <ProjectCard
              description={item.description}
              code={item.code}
              site={item.site}
              status={item.status}
              technologies={item.technologies}
              name={item.name} />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

