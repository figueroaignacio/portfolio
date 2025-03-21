import { BackButton } from "@/components/BackButton";
import { Outlet } from "react-router";

export function ArticleLayout() {
  return (
    <>
      <BackButton />
      <Outlet />
    </>
  );
}
