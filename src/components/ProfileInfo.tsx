import { Contacts } from "@/sections/Contacts";
import { Link } from "react-router-dom";
import { SelectLanguage } from "./SelectLanguage";
import { ToggleTheme } from "./ToggleTheme";

export function ProfileInfo() {
  return (
    <section className="lg:border-r lg:border-border h-full p-3 lg:p-6 space-y-3">
      <Link to="/" className="text-xs underline">
        ignaciofigueroa.vercel.app
      </Link>
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold">Ignacio Figueroa</h2>
          <h3>
            Creating <span>Interactive and Functional</span> Web Experiences.
          </h3>
        </div>
        <div className="flex space-x-2">
          <ToggleTheme />
          <SelectLanguage />
        </div>
      </div>
      <p className="text-muted-foreground text-sm">
        Hey👋🏽 I am motivated by collaborating with diverse teams and developing
        innovative products that generate significant results. I am always
        looking for challenges that allow me to keep growing and contribute to
        the advancement of the tech world.
      </p>
      <Contacts />
    </section>
  );
}
