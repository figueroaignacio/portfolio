// Components
import { SelectLanguage } from "@/components/SelectLanguage";
import { ToggleTheme } from "@/components/ToggleTheme";

// Constants
import { CONTACTS } from "@/constants/contact.tsx";

export function Actions() {
  return (
    <div>
      <ul className="flex gap-x-2 flex-wrap gap-y-5">
        <li>
          <a
            href=""
            className="flex items-center gap-2 px-4 py-1.5 rounded-md text-sm hover:bg-primary-foreground duration-100 border-[1px] border-border"
          >
            CV
          </a>
        </li>
        {CONTACTS.map((item, index: number) => (
          <li key={index}>
            <a
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 rounded-md text-sm hover:bg-primary-foreground duration-100 border-[1px] border-border "
            >
              {item.icon}
            </a>
          </li>
        ))}
        <li>
          <SelectLanguage />
        </li>
        <li>
          <ToggleTheme />
        </li>
      </ul>
    </div>
  );
}
