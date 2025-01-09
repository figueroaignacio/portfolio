// Hooks
import { useTranslation } from "react-i18next";

// Constants
import { CONTACTS } from "@/constants/contact.tsx";

export function Contacts() {
  const { t } = useTranslation();

  return (
    <div>
      <ul className="flex gap-x-2">
        <li>
          <a
            href=""
            className="flex items-center gap-2 px-4 py-1.5 rounded-md text-sm bg-primary hover:bg-primary-foreground duration-100 border-[1px] border-border"
          >
            CV
          </a>
        </li>
        {CONTACTS.map((item, index: number) => (
          <li key={index}>
            <a
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm bg-primary hover:bg-primary-foreground duration-100 border-[1px] border-border "
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
