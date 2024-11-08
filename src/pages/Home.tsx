import React from "react"

// Hooks
import { Trans, useTranslation } from "react-i18next"

// Components
import { Link } from "react-router-dom"
import { ExperienceCard } from "@/components/ExperienceCard.tsx";
import { CallToAction } from "@/components/CallToAction.tsx";
import { ProjectCard } from "@/components/ProjectCard.tsx";

// Icons
import { Chevron, User } from "@/components/Icons.tsx"

// Utils
import { motion } from "framer-motion"
import { containerVariants, fadeUpVariants } from "@/constants/animations.ts";

type Experience = {
  company: string;
  datetime: string;
  role: string;
  responsibilities: string[];
  description: string;
  techStack: string[];
}

type Project = {
  name: string
  description: string
  technologies: string[]
  code: string
  site: string
  status: "In Development" | "Completed" | "Under maintenance"
}

export function Home() {
  const { t } = useTranslation()
  const experience = t("sections.experience.items", { returnObjects: true }) as Experience[]
  const mainProjects = t("sections.mainProjects.items", { returnObjects: true }) as Project[]

  const links: { href: string; label: string; icon: React.ReactNode }[] = [
    {
      label: t("sections.home.links.projects.label"),
      href: "/projects",
      icon: <Chevron />,
    },
    {
      label: t("sections.home.links.about.label"),
      href: "/about",
      icon: <User />,
    },
  ]

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-14 pb-12"
    >
      <section
        className="min-h-[80dvh] flex flex-col justify-center gap-y-3"
      >
        <motion.h1
          className="text-5xl font-bold py-2"
          variants={fadeUpVariants}>
          {t("sections.home.title")}
        </motion.h1>
        <motion.h2
          className="text-muted-foreground"
          variants={fadeUpVariants}>
          <Trans
            i18nKey="sections.home.subtitle"
            components={{ span: <span className="gradient-text font-bold" /> }}
          />
        </motion.h2>
        <div
          className="flex gap-x-2"
        >
          {links.map((link, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}>
              <Link
                to={link.href}
                className="flex items-center gap-2 px-6 py-2 rounded-md text-sm bg-primary hover:bg-primary-foreground duration-100 border-[1px] border-border"
              >
                {link.label}
                {link.icon}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <section>
        <motion.h2
          className="font-bold text-xl"
          variants={fadeUpVariants}>{t("sections.experience.title")}
        </motion.h2>
        <ul>
          {experience.map((item, index) => (
            <motion.li
              key={index}
              variants={fadeUpVariants}>
              <ExperienceCard
                responsibilities={item.responsibilities}
                datetime={item.datetime}
                company={item.company}
                role={item.role}
                description={item.description}
                techStack={item.techStack}
              />
            </motion.li>
          ))}
        </ul>
      </section>
      <section>
        <CallToAction />
      </section>
      <section>
        <h2
          className="font-bold text-xl mb-5"
        >
          {t("sections.mainProjects.title")}
        </h2>
        <ul className="space-y-5 items-center">
          {mainProjects.map((item, index) => (
            <li key={index}>
              <ProjectCard
                description={item.description}
                code={item.code}
                site={item.site}
                status={item.status}
                technologies={item.technologies}
                name={item.name} />
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  )
}
