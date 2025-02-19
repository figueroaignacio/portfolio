// Hooks
import { useTranslation } from "react-i18next";

// Constants
import { CONTACTS } from "@/lib/constants";

export function Contact() {
  const { t } = useTranslation();
  return (
    <section className="space-y-5">
      <h2 className="text-lg font-bold">{t("sections.contact.title")}</h2>
      <p className="text-sm">{t("sections.contact.description")}</p>
      <ul className="flex gap-6">
        {CONTACTS.map((contact, index) => (
          <li key={index} className="flex items-center">
            <a href={contact.href} target="_blank" className="hover:underline">
              {contact.title}
            </a>
            {index !== CONTACTS.length - 1 && (
              <span className="ml-6 mx-3 text-gray-500 select-none">/</span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
