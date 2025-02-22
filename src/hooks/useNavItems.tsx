import { useTranslation } from "react-i18next";
import {
  AboutIcon,
  HomeIcon,
  NotesIcon,
  ProjectsIcon,
} from "../components/Icons";
import type { NavItem } from "../lib/definitions";

export const useNavItems = (): NavItem[] => {
  const { t } = useTranslation();

  return [
    { label: t("ui.navigation.home.label"), href: "/", icon: <HomeIcon /> },
    {
      label: t("ui.navigation.about.label"),
      href: "/about",
      icon: <AboutIcon />,
    },
    {
      label: t("ui.navigation.projects.label"),
      href: "/projects",
      icon: <ProjectsIcon />,
    },
    {
      label: t("ui.navigation.notes.label"),
      href: "/notes",
      icon: <NotesIcon />,
    },
  ];
};
