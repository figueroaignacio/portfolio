import { Footer } from "@/components/Footer";
import { Outlet } from "react-router";

export function BaseLayout() {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
}
