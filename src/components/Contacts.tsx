import { useTranslation } from "react-i18next";

import { CONTACTS } from "@/constants/contact.tsx";
import { motion } from "framer-motion";

import { fadeUpVariants, listItemVariants } from "@/constants/animations.ts";


export function Contacts() {
  const { t } = useTranslation();

  return (
    <div>
      <motion.h2
        variants={fadeUpVariants}
        className="font-bold my-2">{t("sections.contacts.title")}</motion.h2>
      <ul className="flex gap-x-2">
        {CONTACTS.map((item, index: number) => (
          <motion.li
            key={index}
            variants={listItemVariants}
          >
            <a
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm bg-primary hover:bg-primary-foreground duration-100 border-[1px] border-border">
              {item.icon}
              {item.title}
            </a>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}