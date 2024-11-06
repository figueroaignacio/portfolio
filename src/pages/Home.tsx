import React from "react"

// Hooks
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

// Icons
import { Chevron, User } from "@/components/Icons.tsx"

// Utils
import { motion } from "framer-motion"
import { containerVariants, fadeUpVariants } from "@/constants/animations.ts";

export function Home() {
  const { t } = useTranslation()

  const links: { href: string; label: string; icon: React.ReactNode }[] = [
    {
      href: "/projects",
      label: "Projects",
      icon: <Chevron />,
    },
    {
      href: "/about",
      label: "About me",
      icon: <User />,
    },
  ]

  return (
    <motion.section
      className="min-h-[80dvh] flex flex-col justify-center gap-y-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl font-bold gradient-text py-2"
        variants={fadeUpVariants}>
        {t("sections.home.title")}
      </motion.h1>
      <motion.h2
        className="text-muted-foreground"
        variants={fadeUpVariants}>
        {t("sections.home.subtitle")}
      </motion.h2>
      <motion.div
        className="flex gap-x-2"
        variants={fadeUpVariants}>
        {links.map((link, index) => (
          <div key={index}>
            <Link
              to={link.href}
              className="flex items-center gap-2 px-6 py-2 rounded-md text-sm bg-primary hover:bg-primary-foreground duration-100 border-[1px] border-border"
            >
              {link.label}
              {link.icon}
            </Link>
          </div>
        ))}
      </motion.div>
    </motion.section>
  )
}