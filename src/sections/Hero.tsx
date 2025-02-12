import { useTranslation } from "react-i18next";

import { Actions } from "./Actions";

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative">
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2g2OXRzd2xyMHczamJqNGRqajVzNHBhamc0bWtxcnM3cjlxZ2d3bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kjETcOXKdbYLS/giphy.gif"
        alt=""
        className="w-full h-80 object-cover"
      />
      <img
        src="https://github.com/figueroaignacio.png"
        alt="Gif"
        className="size-20 rounded-md relative -top-10 left-5"
      />
      <div className="px-5 space-y-5">
        <div>
          <h1 className="text-3xl font-bold">Ignacio Figueroa</h1>
          <p className="text-thin text-muted-foreground">Fullstack Developer</p>
        </div>
        <Actions />
        <p className="text-muted-foreground text-sm">
          {t("sections.hero.introduction")}
        </p>
      </div>
    </section>
  );
}
