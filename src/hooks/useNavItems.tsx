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
    { label: t("ui.navigation.home"), href: "/", icon: <HomeIcon /> },
    {
      label: t("ui.navigation.experience"),
      href: "/experience",
      icon: <AboutIcon />,
    },
    {
      label: t("ui.navigation.projects"),
      href: "/projects",
      icon: <ProjectsIcon />,
    },
    { label: t("ui.navigation.notes"), href: "/notes", icon: <NotesIcon /> },
  ];
};
