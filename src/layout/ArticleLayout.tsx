import { BackButton } from "@/components/BackButton";
import { Outlet } from "react-router-dom";

export function ArticleLayout() {
  return (
    <>
      <BackButton />
      <Outlet />
    </>
  );
}
