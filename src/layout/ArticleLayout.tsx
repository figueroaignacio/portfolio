import { BackButton } from "@/components/BackButton";
import { Outlet } from "react-router";

export function ArticleLayout() {
  return (
    <div>
      <BackButton />
      <Outlet />
    </div>
  );
}
