// Components
import { Navbar } from "@/components/Navbar";
import { ProfileInfo } from "@/components/ProfileInfo";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:border lg:border-border lg:mx-5 my-3 rounded-md">
      <div className="col-span-5">
        <ProfileInfo />
      </div>
      <main className="col-span-7 lg:p-6">
        <Navbar />
        <div className="lg:max-h-[80dvh] lg:overflow-y-scroll px-3">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
